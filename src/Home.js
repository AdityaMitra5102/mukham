//import React, { useEffect, useRef } from "react";
import Loding from "./components/Loding";
import "./home.css";
import heroimg from "./assets/illustration.png";
import playstore_button from "./assets/google-play-badge.png";
import applestore_button from "./assets/apple-badge.svg";
import aboutimg from "./assets/[Mockup] iPhone X.png";
import mockup1 from "./assets/Group.png";
import { useHistory } from "react-router-dom";
import Contactus from "./Contactus";

const Alinks = "/about";
const Plinks = "/product";



function Home() {
  const history = useHistory();
  function LinkTO(link) {
    if (link === "") {
      console.log("Link not attached yet !!!!");
    } else {
      history.push({
        pathname: link,
      });
    }
  }
  return (
    <div>
      <Loding />
      <div className="homepage">
        {/* Hero section */}
        <section className="sec fixtop">
          <div className="hero-content">
            <div className="hero-content-left">
              <h1>MUKHAM</h1>
              <p>
                A new Mobile Application which can be installed for facial
                attendance with 100% Social Distancing.
              </p>

              <div className="buttons">
                <a
                  href="https://mukham.in/app.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={playstore_button} alt="playstore" />
                </a>
                <a
                  className="app-button"
                  href="https://mukham.in/app.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={applestore_button} alt="applestore" />
                </a>
              </div>
            </div>
            <div className="hero-content-right">
              <img src={heroimg} alt="" />
            </div>
          </div>
        </section>

        {/* about section */}

        <section className="sec">
          <h2 className="mukham">MUKHAM!?</h2>
          <div className="about_sec_content">
            <div className="about_sec_left lap">
              <img src={aboutimg} alt="AboutImage" />
            </div>
            <div className="about_sec_right">
              <h3>Our objective</h3>
              <p>
                We Company Mukham Inc, a fully student driven Start-up
                accelerating from VIT-AP emerged with a new Mobile Application
                which can be installed for facial attendance with 100% Social
                Distancing. It uses Geotagging to know the location of the
                particular user and if the user is not within the range the app
                won’t allow him to mark attendance.
              </p>
              <br />
              <button className="button" onClick={() => LinkTO(Alinks)}>
                Know more
              </button>
            </div>
            <div className="about_sec_left mobile">
              <img src={aboutimg} alt="logo" />
            </div>
          </div>
        </section>

        {/* product section */}

        <section className="sec df">
          <div className="product_sec_content">
            <div className="product_sec_left">
              <h3 style={{ marginLeft: "10px", marginBottom: "10px" }}>
                Product
              </h3>
              <p>
                The application is integrated with Assistant to remind and
                process the flow. It consists of a complete simplified UI which
                takes less than 10 seconds to mark attendance. In addition to
                this it has a magnificent Complete Customized dashboards to take
                attendance reports. This indeed makes it easier both for the
                student as well as the educational institute, employee and the
                company. This can be enhanced to support and monitor the
                employees who are working on fields/on sites.
              </p>
              <br />
              <button className="button" onClick={() => LinkTO(Plinks)}>
                Know more
              </button>
            </div>
            <div className="product_sec_right">
              <img src={mockup1} alt="" />
            </div>
          </div>
        </section>

        {/* contact form */}
        <section className="sec">
          <Contactus />
        </section>
      </div>
    </div>
  );
}

export default Home;
