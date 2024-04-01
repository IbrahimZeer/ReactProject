/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={""}>
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link center" to={"/"}>
                Homepage
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to={"/signin"}>
                Signin
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to={"/signup"}>
                Signup
              </NavLink>
            </li>

            <li className="nav-item center">
              <NavLink className="nav-link" to={"/categories"}>
                Categories
              </NavLink>
            </li>

            <li className="nav-item left">
              <NavLink className="nav-link" to={"/products"}>
                Products
              </NavLink>
            </li>

            <li className="nav-item left">
              <NavLink className="nav-link" to={"/cart"}>
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
