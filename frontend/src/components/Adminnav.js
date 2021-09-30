import React from "react";
import { Link } from "react-router-dom";
//import Modal from "react-modal";
import { useState } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import Swal from "sweetalert2";
import Hireagent from "./Hireagent";
function Adminnav() {
  const logoutAdmin = () => {
    sessionStorage.removeItem("admin");
    window.location = "/";
  };
  
  return (
    <div>

      <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top p-2">
        <div className="container">
          <h3 className="navbar-brand text-warning font-weight-bold">
            ZERO-E-WASTE:-
            <span classNameName="text-white fs-3 ">Admin Panel</span>
          </h3>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsenavbar"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse text-center" id="collapsenavbar">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item ms-5">
                <Link to="/admin" classNameName="nav-link text-white">
                  View Pending Requests
                </Link>
              </li>

              <li className="nav-item ms-5">
                <Link to="/adminview" classNameName="nav-link text-white">
                  View Collected Donations
                </Link>
              </li>

              <li className="nav-item ms-5">
                <Link to="/adminusers" classNameName="nav-link text-white">
                  View Users
                </Link>
              </li>

              <li className="nav-item ms-5">
                <Link to="/Hireagent" classNameName="nav-link text-white">
                  Hire Agent
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link to="/Adminagents" classNameName="nav-link text-white">
                  View Agents
                </Link>
              </li>
              
              <li className="nav-item  nav-logout">
                <button
                  className="btn btn-sm btn-primary ps-3 pe-3 p-2"
                  onClick={logoutAdmin}
                  type="submit"
                >
                  &nbsp;&nbsp;LOGOUT&nbsp;&nbsp;
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Adminnav;
