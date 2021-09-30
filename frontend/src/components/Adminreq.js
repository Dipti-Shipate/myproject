import React, { useEffect, useState } from "react";
import Admincard from "./Admincard";
import base_url from "../api/bootapi";
import swal from "sweetalert2";
import axios from "axios";
import "../css/carddesign.css";
import "../css/admin.css";
//import SearchBox from "./SearchBox";

function Adminreq() {
  useEffect(() => {
    document.title = "View Requests";
    if (sessionStorage.getItem("admin") != "admin") {
      window.location = "/";
    }
    viewAllRequests();
    sessionStorage.setItem("frompage","adminreq");
  }, []);

  const viewAllRequests = () => {
    axios.get(`${base_url}/viewallpendingrequests`).then(
      (response) => {
        if (response.data.length === 0) {
          
          swal.fire({
            title: "Admin",
            text: "There are no requests",
            icon: "error",
            button: "Ok",
          });
        }
        console.log(response.data);
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

  const onSearchChange=(event)=>{
   // this.setState({searchfield: event.target.value})
    console.log(event.target.value);
    setSearchfield(event.target.value);
   
}
  const [requests, setRequests] = useState([]);
  const[searchfield,setSearchfield]=useState("");
  const filteredRequests = requests.filter(requestitem=>{
    return requestitem.city.toLowerCase().includes(searchfield.toLowerCase())
})

  return (
    <div class="min-vh-100 mt-5 admin-bg">
    <div class="container">
        <input type="text" class="any" onChange={onSearchChange} placeholder="Sort City Wise"/>

   {/* <!-- Card deck --> */} 
    <div class="card-deck row">
      

  
          {requests.length > 0 ? (
              filteredRequests.map((item) => <Admincard request={item} />)
            ) : (
              <h2 className="text-center m-5 p-5">No request cards</h2>
            )}
          </div>
          
          </div>
          </div>
            
  );
 
}

export default Adminreq;
{/*

  
  
  <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {requests.length>0?(
        requests.map((item) => {
          return <Admincard key={item.reqid} request={item}/>;

        })):(<h2 className="text-center m-5 p-5">No request cards</h2>)}
      </div>
    </section>
    </div>
             /*}

             {/*
      <div className=" vh-100">
        <h1 className="mt-5 pt-5 text-center text-white fw-bold">
          View Pending Requests
        </h1>
        <table
          className="table table-striped table-secondary mt-5 p-5 m-auto"
          style={{ width: "90%" }}
        >
          <thead>
            <tr className="fs-4">
              <th scope="col">Request ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">E-Waste</th>
              <th scope="col">Quantity</th>
              <th scope="col">Delete</th>
              <th scope="col">Assign Agent</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((item) => <Admincard request={item} />)
            ) : (
              <h2 className="text-center m-5 p-5">No request cards</h2>
            )}
          </tbody>
        </table>
      </div>*/}
          