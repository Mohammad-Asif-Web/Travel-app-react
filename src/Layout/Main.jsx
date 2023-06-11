import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer/Footer"

const Main = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("signup")
    || 
    location.pathname.includes("login");
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;