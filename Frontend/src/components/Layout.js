import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
