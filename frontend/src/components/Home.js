import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";
import mumimg from "../images/Mumbai.jpg";
import puneimg from "../images/pune.png";
import hydimg from "../images/hyderbad.jpg";
import bangimg from "../images/banglore.jpg";

function Home() {
  useEffect(() => {
    document.title = "Home";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
  }, []);
  return (
    <div
    style={{
      backgroundImage:
        "linear-gradient(to right top, #ba538d, #ad5b9c, #9c63a9, #896bb2, #7572b7, #637dc0, #4f87c5, #3a90c7, #21a0cc, #1aafcc, #34bdc8, #55cac2)",
    }}
    >
      <div class="bgimg">
       <div class="container text-center text-white mt-5 mb-5 pt-5">
       <video width="850" height="600" controls autoPlay >
          <source src="/video1.mp4" type="video/mp4"/>
       </video>
          <br />
          <Link to="/aboutus" class="btn btn-warning text-white btn-lg mt-5">
            ABOUT US
          </Link>
    </div>
      </div>

      <section class="container ourservices text-center">
        <h1>OUR SERVICES</h1>
        <div class="row rowsetting">
          <div class="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
            <div class="imgsetting d-block m-auto bg-dark">
              <i class="fa fa-truck fa-3x text-white"></i>
            </div>
            <h2>E-Waste Management</h2>
          </div>

        <div class="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
            <div class="imgsetting d-block m-auto bg-dark">
              <i class="fa fa-recycle fa-3x text-white"></i>
            </div>
            <h2>E-Waste Recycling</h2>
        </div>

          <div class="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
            <div class="imgsetting d-block m-auto bg-dark">
              <i class="fa fa-send fa-3x text-white"></i>
            </div>
            <h2>Public Awareness</h2>
          </div>
        </div>
      </section>
      <section
        class="portfolio"
        style={{
          backgroundImage:
            "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
        }}
      >
        <div class="container text-center ">
          <h1>LATEST BLOGS</h1>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div class="card">
                <img
                  src={blog1}
                  class="card img-fluid"
                  style={{ width: "330px", height: "250px" }}
                />
                <div class="card body ">
                  <h2 class="card-title">
                    Recycling of e-waste in India and its potential
                  </h2>
                  <p class="card-text text-left">
                    Electronic waste (e-waste) typically includes discarded
                    computer monitors, motherboards, mobile phones and chargers,
                    compact discs, headphones, television sets, air conditioners
                    and refrigerators. According to the Global E-Waste Monitor
                    2017, India generates about 2 million tonnes (MT) of e-waste
                    annually and ranks fifth among e-waste producing countries,
                    after the US, China, Japan and Germany.In 2016-17, India
                    treated only 0.036 MT of its e-waste.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div class="card">
                <img
                  src={blog2}
                  class="card img-fluid"
                  style={{ width: "330px", height: "250px" }}
                />
                <div class="card body">
                  <h2 class="card-title">How E-Waste Is Harmful to Your Health ?</h2>
                  <p class="card-text text-left">
                  The toxic components in e-waste have the ability to damage almost every system in the human body: 
                  the nervous system, reproductive system and skeletal system, as well as the brain, heart, liver and kidneys, 
                  and also causes birth defects. Exposure to improperly disposed of chlorine causes the destruction of cell structure 
                  and tissue damage. Cadmium is found in cell phone batteries and can cause kidney damage.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div class="card">
                <img
                  src={blog3}
                  class="card img-fluid"
                  style={{ width: "330px", height: "250px" }}
                />
                <div class="card body">
                  <h2 class="card-title">
                    8 Reasons To Recycle Your Old Home Appliance
                  </h2>
                  <p class="card-text text-left">
                    These are the 8 main reasons:-
                    <ul>
                      <li>Dangerous effects of non-recycled electronics</li>
                      <li>Recycling electronics is easier now</li>
                      <li>Data Destruction can be securely performed</li>
                      <li>Get precious metals out of your e-waste</li>
                      <li>Haphazard disposition is illegal</li>
                      <li>Help others in need</li>
                      <li>Recycling old gadgets could save money</li>
                      
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage:
            "linear-gradient(to right top, #ba538d, #ad5b9c, #9c63a9, #896bb2, #7572b7, #637dc0, #4f87c5, #3a90c7, #21a0cc, #1aafcc, #34bdc8, #55cac2)",
        }}
      >
        <div class="text-center p-5">
          <h1 color="blue">We are currently working in these cities</h1>
          <hr class="hrline" />
          <br />
          <br />
          <div class="img1">
            <img src={mumimg} alt="Mumbai image" height="250" width="310" />
            <img src={puneimg} alt="pune" height="250" width="310" />
            <img src={hydimg} alt="hyd" height="250" width="310" />
            <img src={bangimg} alt="banglore" height="250" width="310" />
          </div>
          <div class="fourcities">
            <h3 class="fmumbai">
              Mumbai <br />
              900k+ Tonnes
            </h3>
            <h3 class="fpune">
              Pune
              <br />
              750k+ Tonnes
            </h3>
            <h3 class="fbanglore">
              Hyderabad
              <br />
              456k+ Tonnes
            </h3>
            <h3 class="fbanglore">
              Banglore
              <br />
              300k+ Tonnes
            </h3>
          </div>
        </div>
      </section>
      <br />
      <br />
    </div>
  );
}

export default Home;
