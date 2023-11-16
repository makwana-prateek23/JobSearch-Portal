import "./App.css";
import About from "./Pages/About";
import JobsGrid from "./Pages/JobsGrid";
import Main from "./Pages/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      element: <About />,
    },
    {
      path: "/jobs",
      element: <JobsGrid />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
