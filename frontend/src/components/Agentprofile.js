import React, { useEffect, useState } from "react";
import "../css/profile.css";
import { useHistory } from "react-router-dom";
import loginimg from "../images/login.jpg";
import { Link } from "react-router-dom";
import base_url from "../api/bootapi";
import axios from "axios";
import swal from "sweetalert2";

function Agentprofile() {
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  const history=useHistory();
  const user=sessionStorage.getItem("user");
  useEffect(() => {
    console.log(userdata);
    document.title = "Profile";
    if (user != "agent") {
      window.location = "/";
    }
  }, []);

  let updateAgent=(id)=>{
    history.push(`/updateagent`);
  }

  return (
    <div class="profile-bg">
    <div class="container  w-50">
      <div class="row d-flex justify-content-center mt-4">
        <div class="col-md-10 mt-5 pt-5">
          <div class=" z-depth-3">
          <div class="col-sm-12  rounded-left rounded-right p-bg">
              <div class="card-block text-center text-white">
                <i class="fas fa-id-card fa-7x mt-5 mb-5"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 ">
          <div class=" z-depth-3">
          <div class="col-sm-12 bg-white rounded-left rounded-right pb-3">
              <h3 class=" p-2 text-center font-weight-bold">
                <b>PROFILE CARD</b>
              </h3>
                <hr class="bg-primary" />
                <div class="row">
                  <div class="col-sm-12">
                    <h3 class="font-weight-bold">
                      Agent id:{user == "agent" ? userdata.id : "id"}
                    </h3>
                  </div>
                </div>
                <hr class="badge-primary mt-0 " />
                <div class="row">
                  <div class="col-sm-12">
                    <h3 class="font-weight-bold">
                      Full Name : {user == "agent" ?userdata.name : "name"}
                    </h3>
                  </div>
                </div>
                <hr class="bg-primary" />
                <div class="row">
                  <div class="col-sm-12">
                    <h3 class="font-weight-bold">
                      Email ID : {user == "agent" ?userdata.email  : "email"}
                    </h3>
                  </div>
                </div>
                <hr class="bg-primary" />
                <div class="row">
                  <div class="col-sm-12">
                    <h3 class="font-weight-bold">
                      Phone:{user == "agent" ?userdata.phone: "phone"}
                    </h3>
                  </div>
                </div>
                <div class="row pt-4">
                <div className="col-md-6 text-center mt-2 mb-5  ">
                  <Link to="/agenthome" className="btn btn-primary btn-lg ps-5 pe-5 p-3">
                    Back
                  </Link>
                </div>
                <div className="col-md-6 text-center mt-2 mb-5  ">
                  <input
                    type="button"
                    className="btn btn-primary btn-lg ps-5 pe-5 p-3"
                    value="Update"
                    onClick={()=>updateAgent(userdata.id)}
                  />
                </div>       
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agentprofile;
