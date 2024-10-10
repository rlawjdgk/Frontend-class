import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ authenticate, setauthenticate }) => {
  return (
    <>
      <Navbar authenticate={authenticate} setauthenticate={setauthenticate} />
      <Outlet />
    </>
  );
};

export default Layout;
