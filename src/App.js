import "./App.css";
import Navbar from "./NavBar";

function App() {
  const user = {
    name: "Shivraj",
    profilePicture: "https://example.com/profile.jpg",
  };
  return <Navbar user={user} />;
}

export default App;
