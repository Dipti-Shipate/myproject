import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="bg-dark text-white pt-5 pb-4">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                ZEROWASTE
              </h5>
              <p>
                We collect E-waste from various societies and nearby
                localities.We are currently working only in four cities for now
                i.e Mumbai,Hyderabad,Pune and Banglore
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Products
              </h5>
              <p>
                <a href="#" class="text-white">
                  E-Waste Management
                </a>
              </p>
              <p>
                <a href="#" class="text-white">
                  E-Waste Recycling
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Useful links
              </h5>
              <p>
                <Link to="/home" class="text-white">
                  HOME
                </Link>
              </p>
              <p>
                <Link to="/donate" class="text-white">
                  DONATE
                </Link>
              </p>
              <p>
                <Link to="/view" class="text-white">
                  VIEW DONATION
                </Link>
              </p>
              <p>
                <Link to="/profile" class="text-white">
                  PROFILE
                </Link>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i class="fa fa-home mr-3"></i>Pune
              </p>
              <p>
                <i class="fa fa-envelope mr-3"></i>zerowaste@gmail.com
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 7385189823
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 9978787877
              </p>
            </div>
          </div>

          <hr class="mb-4" />

          <div class="row align-items-center">
            <div class="col-md-7 col-lg-12 m-auto">
              <p>
                Copyright ©2021 All rights reserved by:
                <a href="#">
                  <strong class="text-warning">Team 35 CDAC ACTS PUNE</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
