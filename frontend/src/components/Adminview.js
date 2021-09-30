import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import Admincolcard from "./Admincolcard";
import swal from "sweetalert2";
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory,{textFilter} from "react-bootstrap-table2-filter";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.js';
import "../css/admin.css";

function Adminview() {
  useEffect(() => {
    document.title = "View Collections";
    if (sessionStorage.getItem("admin") != "admin") {
      window.location = "/";
    }
    viewCollection();
  }, []);

  const viewCollection = () => {
    axios.get(`${base_url}/viewcollections`).then(
      (response) => {
        //console.log("uday "+response.data);
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

  var supplierPage=(requestId)=>{
    swal.fire("taking to payment page","Loading").then(function (){
     sessionStorage.setItem("product_request",requestId);
    // sessionStorage.setItem("email_request",request.email);
      
     window.location="/payment";
    })
  }

  const [requests, setRequests] = useState([]);
  console.log(requests);
  const columns=[
    {dataField:'reqid',text:'Donation Id',sort:true},
    {dataField:'name',text:'Name',sort:true,filter:textFilter()},
    {dataField:'email',text:'Email ID',sort:true},
    {dataField:'ewasteQty',text:'E-Waste Donated'},
    {dataField:'quantity',text:'Quantity'},
    {dataField:'agentid.id',text:'Agent-Id',sort:true,filter:textFilter()},
    {text:'Payment',formatter:(cell, row) =>(row.payment==0)?
    (<button type="button" class="btn btn-outline-danger btn-sm badge-pill" 
    onClick={ () => {supplierPage(row.reqid)} }>Pay
    </button>):<span>Paid : Rs.{row.payment}</span>}

  ]
  const page=paginationFactory({
    page:1,
    sizePerPage:5,
    nextPageText:'>',
    firstPageText:'<<',
    lastPageText:'>>',
    prePageText:'<',
    showTotal:true,
    alwaysShowAllBtns:true,
    onPageChange:function(page,sizePerPage){
      console.log(page);
      console.log(sizePerPage);
    },
    onSizePerPageChange:function(page,sizePerPage){
      console.log(page);
      console.log(sizePerPage);
    }
  })
  return (
    <div  className="min-vh-100 admin-bg ">
       <div class="container mt-5 pt-3 ">
        
        <div class="card card-bg">
          <h4 class="card-header txt-deco">Collections</h4>
          <div class="card-body bt">
        {/*<table
          className="table table-striped table-light  m-auto mt-5 "
          style={{ width: "90%" }}
        >
          <thead>
            <tr className="fs-4">
              <th scope="col">Donation ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email ID</th>
              <th scope="col">E-waste Donated</th>
              <th scope="col"> Quantity</th>
              <th scope="col">Agent ID</th>
            </tr>
          </thead>
          <tbody>{console.log("fghjkl"+requests.agentid+"  "+ requests.quantity)}
            {requests.length > 0 ? (
              
              requests.map((item) => <Admincolcard request={item} />)
            ) : (
              <h2 className="text-center m-5 p-5">No request cards</h2>
            )}
          </tbody>
        </table>*/}
         
        <BootstrapTable bootstrap4 keyField="reqid" columns={columns} data={requests}
        filter={filterFactory()}
        pagination={page}
        />
        </div>
        </div>
      </div>
    </div>
 
  );
}

export default Adminview;
