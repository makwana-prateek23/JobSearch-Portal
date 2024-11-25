import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("accessToken")
  );
  const [userRole, setUserRole] = useState(localStorage.getItem("role") || "");
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken")
  );

  // Function to handle login
  const login = async (email, password) => {
    const loginData = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        loginData
      );
      if (response.status === 200) {
        const { accessToken, refreshToken, role } = response.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("role", role);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setIsAuthenticated(true);
        setUserRole(role);
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  const logout = useCallback(() => {
    localStorage.clear();
    setIsAuthenticated(false);
    setUserRole("");
    setAccessToken(null);
    setRefreshToken(null);
  }, []);
  // Function to refresh the access token
  const refreshTokenHandler = useCallback(async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/refresh-token",
        { refreshToken }
      );
      if (response.status === 200) {
        const { accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        setAccessToken(accessToken);
        return accessToken;
      }
    } catch (error) {
      console.error("Failed to refresh token:", error);
      if (error.response?.status === 403 || error.response?.status === 401) {
        logout();
      }
    }
  }, [refreshToken, logout]);

  // Function to log out the user
 

  // Set up periodic token refresh
  useEffect(() => {
    if (refreshToken) {
      const refreshInterval = setInterval(() => {
        refreshTokenHandler();
      }, 15 * 60 * 1000); // Refresh every 15 minutes
      return () => clearInterval(refreshInterval); // Cleanup on unmount
    }
  }, [refreshToken, refreshTokenHandler]);

  // Axios interceptor for refreshing token on 401 errors
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401 && refreshToken) {
          const newAccessToken = await refreshTokenHandler();
          if (newAccessToken) {
            error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
            return axios(error.config);
          }
        }
        return Promise.reject(error);
      }
    );
    return () => axios.interceptors.response.eject(interceptor); // Cleanup interceptor on unmount
  }, [refreshToken, refreshTokenHandler]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userRole,
        login,
        logout,
        refreshTokenHandler,
        accessToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
