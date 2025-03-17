"use client";
import React, { useState } from "react";
import JobOpeningForm from "./JobOpeningForm";
const JobCard = ({ logo, jobTitle, experience, workType, salary, time }) => {
  return (
    <div style={styles.jobCard}>
      {/* Company Logo */}
      <div style={styles.companyLogo}>
        <img src={logo} alt="Company Logo" style={{ width: "100%", borderRadius: "12px" }} />
      </div>

      {/* Posting Time */}
      <div style={styles.jobTimeContainer}>
        <span style={styles.jobTimeText}>{time}</span>
      </div>

      {/* Job Title */}
      <div style={styles.jobTitle}>{jobTitle}</div>

      {/* Job Details */}
      <div style={styles.jobDetailsContainer}>
        <span style={styles.jobDetailItem}>
          <img src="/logos/experience.png" alt="Experience" style={styles.smallIcon} />
          {experience}
        </span>
        <span style={styles.jobDetailItem}>
          <img src="/logos/worktype.png" alt="Work Type" style={styles.smallIcon} />
          {workType}
        </span>
        <span style={styles.jobDetailItem}>
          <img src="/logos/salary.png" alt="Salary" style={styles.smallIcon} />
          {salary}
        </span>
      </div>

      {/* Job Info */}
      <div style={styles.infoContainer}>
        <ul style={styles.infoList}>
          <li>A user-friendly interface lets you browse stunning photos and videos.</li>
          <li>Filter destinations based on interests and travel style.</li>
        </ul>
      </div>

      {/* Apply Button */}
      <div style={styles.applyButton}>Apply Now</div>
    </div>
  );
};

const JobList = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const jobs = [
    { logo: "/logos/amazon.png", jobTitle: "Full Stack Developer", experience: "1-3 yr Exp", workType: "Onsite", salary: "12LPA", time: "24h Ago" },
    { logo: "/logos/tesla.png", jobTitle: "Node Js Developer", experience: "1-3 yr Exp", workType: "Onsite", salary: "12LPA", time: "24h Ago" },
    { logo: "/logos/swiggy.png", jobTitle: "UX/UI Designer", experience: "1-3 yr Exp", workType: "Onsite", salary: "12LPA", time: "24h Ago" },
    { logo: "/logos/amazon.png", jobTitle: "Frontend Developer", experience: "2-5 yr Exp", workType: "Remote", salary: "15LPA", time: "12h Ago" },
  ];

  return (
    <>
      <div style={styles.containerWrapper}>
        {/* The Create Jobs button is now handled by the Navbar */}

        <div style={styles.gridContainer}>
          {jobs.concat(jobs).map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>

      <JobOpeningForm
        opened={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
};

const styles = {
  containerWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "32px 0",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(316px, 1fr))",
    gap: "16px",
    maxWidth: "1312px",
    width: "100%",
  },
  jobCard: {
    width: "316px",
    height: "360px",
    borderRadius: "12px",
    background: "#FFFFFF",
    boxShadow: "0px 0px 14px 0px #D3D3D326",
    position: "relative",
    padding: "20px",
    fontFamily: "Inter, sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  companyLogo: {
    width: "80px",
    height: "80px",
    borderRadius: "12px",
    background: "#F1F1F1",
    position: "absolute",
    top: "16px",
    left: "16px",
    overflow: "hidden",
  },
  jobTitle: {
    marginTop: "100px",
    fontWeight: "700",
    fontFamily: "Inter, sans-serif",
    fontSize: "20px",
    color: "#000000",
  },
  jobDetailsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "18px",
    marginTop: "10px",
  },
  smallIcon: {
    width: "16px",
    height: "16px",
    marginRight: "4px",
  },
  infoContainer: {
    marginTop: "10px",
  },
  applyButton: {
    width: "100%",
    height: "40px",
    borderRadius: "8px",
    background: "#00aafF",
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "Inter, sans-serif",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  createButton: {
    padding: "10px 20px",
    background: "#00aafF",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "20px",
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "Inter, sans-serif",
  }
};

export default JobList;
