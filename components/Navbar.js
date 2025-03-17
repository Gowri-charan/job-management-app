"use client";

import { useState } from "react";
import JobOpeningForm from "./JobOpeningForm"; // Corrected import

const Navbar = () => {
  const [hoveredCreateJobs, setHoveredCreateJobs] = useState(false);
  const [showJobForm, setShowJobForm] = useState(false); // State for JobOpeningForm visibility

  const handleCreateJobsClick = () => {
    setShowJobForm(true);
  };

  return (
    <>
      {showJobForm && <JobOpeningForm opened={showJobForm} onClose={() => setShowJobForm(false)} />}

      <div style={styles.navbarContainer}>
        <div style={styles.navbarInner}>
          <div style={styles.navLogo}>
            <svg width="44" height="46" viewBox="0 0 44 46">
              <g clipPath="url(#clip0_2_109)">
                <path d="M26.33 5.41968L26.8852 23.3961L41.6353 13.9324L26.33 5.41968Z" fill="#333"/>
                <path d="M41.5308 32.7551V13.8619L20.395 27.4678V45.3387H21.1064" fill="#494949"/>
                <path d="M3.18878 32.0419L16.7153 23.3629L17.2245 39.8485L3.18878 32.0419Z" fill="#7D3CF8"/>
                <path d="M2.46906 13.2451V32.1381L23.6051 18.5501V0.661621H22.8936" fill="#FF6F61"/>
              </g>
            </svg>
          </div>

          <div style={styles.navItems}>
            <button className="navButton">Home</button>
            <button className="navButton">Find Jobs</button>
            <button className="navButton">Find Talents</button>
            <button className="navButton">About Us</button>
            <button className="navButton">Testimonials</button>

            <div
              onClick={() => setShowJobForm(true)}
              style={{
                ...styles.createJobsWrapper,
                transform: hoveredCreateJobs ? "translateY(-3px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredCreateJobs(true)}
              onMouseLeave={() => setHoveredCreateJobs(false)}
            >
              {hoveredCreateJobs ? "Login" : "Create Jobs"}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');

          .navButton {
            font-family: 'Inter', sans-serif;
            background: none;
            border: none;
            font-size: 16px;
            cursor: pointer;
            padding: 8px 12px;
            transition: box 0.2s ease-in-out;
            border-radius: 30px;
          }

          .navButton:hover {
            transform: translateY(-2px);
            box-shadow: 0px 4px 10px rgba(0,0,0,0.15);
            border-radius: 10px;
          }
        `}
      </style>
    </>
  );
};

const styles = {
  navbarContainer: {
    width: "90%",
    maxWidth: "890px",
    height: "80px",
    borderRadius: "40px",
    border: "1px solid #FCFCFC",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    position: "relative",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
  },
  navbarInner: {
    width: "90%",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navLogo: {
    width: "44px",
    height: "46px",
    display: "flex",
    alignItems: "center",
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  createJobsWrapper: {
    width: "120px",
    height: "40px",
    borderRadius: "30px",
    background: "#7D3CF8",
    color: "white",
    fontFamily: "'Inter', sans-serif",
    fontSize: "16px",
    fontWeight: "300",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: "none",
  },
};

export default Navbar;
