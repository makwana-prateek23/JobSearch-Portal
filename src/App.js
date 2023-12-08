import "./App.css";

import AboutUs from "./Pages/AboutUs";
import InternShips from "./Pages/InternShips";
import Jobs from "./Pages/Jobs";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Pages/Register";

function App() {
  // const user = {
  //   name: "Shivraj",
  //   profilePicture: "https://example.com/profile.jpg",
  // };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/jobs",
      element: <Jobs />,
    },
    {
      path: "/Internships",
      element: <InternShips />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
