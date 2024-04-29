
import React from "react";
import Button from "../components/Button";
import { Link } from 'react-router-dom';
// import '../App.css'

export default function Home() {
  return (
    <section id="home">
      <div className="container-fluid px-0 ">
        <div className="container">
          <div className="row mt-lg-4">
            <div className="col-lg-8 col-md-12 homebox">
              <h1 className="primary-text" style={{ marginTop: "3rem" }}>
                Profiles Explored with Locations
              </h1>
              <h3
                className="para-1 d-flex justify-content-center align-items-center"
                style={{ marginTop: "1rem", lineHeight: "1.3rem" }}
              >
                Design and implement a web application using React framework
                that allows users to view a list of profiles and interactively explore the addresses
                of each profile on a map. The application aims to provide an intuitive and
                user-friendly way to navigate through profiles and visualise the geographic
                locations associated with each individual.
              </h3>
              <div className="startbtn">
              <Link to="/explore" >
                <Button label="Explore Profile" c="main-btn" type="start" />
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}