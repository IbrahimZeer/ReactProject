/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
