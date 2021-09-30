import axios from "axios";
import React, { useState, useEffect } from "react";
import base_url from "../api/bootapi";
import swal from "sweetalert2";
import Donationcard from "./Donationcard";
import "../css/home.css";

const Donations = () => {
  const name = sessionStorage.getItem("username");
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  useEffect(() => {
    document.title = "View Donations";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
    viewDonations(userdata);
  }, []);

  const viewDonations = (data) => {
    axios.post(`${base_url}/viewdonations`, data).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: `Hey ${name}`,
            text: "There are no donations",
            icon: "error",
            button: "Ok",
          });
        }
        setRequests(response.data);
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Server is down",
        });
      }
    );
  };
  const [requests, setRequests] = useState([]);

  return (
    <div
    style={{
      backgroundImage:
        "linear-gradient(to right top, #ba538d, #ad5b9c, #9c63a9, #896bb2, #7572b7, #637dc0, #4f87c5, #3a90c7, #21a0cc, #1aafcc, #34bdc8, #55cac2)",
    }}
    >
      <div class="bgimg">
      <h1 className="text-center text-white display-3 pt-5 mt-2 fw-bold "><u>
        Donations
      </u></h1>
      <table className="table table-striped table-dark  m-auto mt-5 mb-5">
        <thead>
          <tr className="fs-4">
            <th scope="col">Donation ID</th>
            <th scope="col">E-waste Donated</th>
            <th scope="col">Address</th>
            <th scope="col">Images</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((item) => <Donationcard request={item} />)
          ) : (
            <h2 className="text-center m-5 p-5">No donations done yet</h2>
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Donations;
