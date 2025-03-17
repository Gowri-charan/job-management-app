"use client";

import { useEffect } from "react";

const JobOpeningForm = ({ opened, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === "jobOpeningOverlay") {
        onClose();
      }
    };

    if (opened) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [opened, onClose]);

  if (!opened) return null;

  return (
    <div id="jobOpeningOverlay" style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={styles.title}>Create Job Opening</h2>
        
        <div style={styles.formGrid}>
          <div>
            <label style={styles.label}>Job Title</label>
            <input type="text" placeholder="Enter Job Title" style={styles.jobTitleInput} />
          </div>

          <div>
            <label style={styles.label}>Company Name</label>
            <input type="text" placeholder="Amazon, Microsoft, Swiggy" style={styles.jobTitleInput} />
          </div>

          <div>
            <label style={styles.label}>Location</label>
            <select style={styles.locationInput}>
              <option>Choose Preferred Location</option>
            </select>
          </div>

          <div>
            <label style={styles.label}>Job Type</label>
            <select style={styles.locationInput}>
              <option>Full-Time</option>
            </select>
          </div>

          <div>
            <label style={styles.label}>Salary Range</label>
            <div style={styles.salaryContainer}>
              
              <input type="number" placeholder="₹0" style={styles.salaryInput} />
              
              <input type="number" placeholder="₹12,00,000" style={styles.salaryInput} />
            </div>
          </div>

          <div>
            <label style={styles.label}>Application Deadline</label>
            <input type="date" style={styles.jobTitleInput} />
          </div>
        </div>

        <label style={styles.label}>Job Description</label>
        <textarea placeholder="Please share a description to let the candidate know more about the job role" style={styles.jobDescriptionInput}></textarea>

        <div style={styles.buttonContainer}>
          <button style={styles.saveDraft}>Save Draft ▾</button>
          <button style={styles.publish}>Publish »</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1001,
    fontFamily: "Inter, sans-serif",
  },
  popup: {
    width: "848px",
    height: "779px",
    background: "white",
    borderRadius: "20px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    boxShadow: "0px 5px 20px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: "18px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    textAlign: "center",
    // width: "227px",
    // height: "32px",
    display: "flex",  // Enables flexbox for centering
    alignItems: "center",  // Centers text vertically
    justifyContent: "center",  // Centers text horizontally
    margin: "10px auto", 
    
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "12px",
    marginTop: "16px",
  },
  label: {
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    marginBottom: "4px",
    display: "block",
  },
  // input: {
  //   width: "376px",
  //   height: "58px",
  //   padding: "10px",
  //   fontSize: "14px",
  //   fontFamily: "Inter, sans-serif",
  //   borderRadius: "10px",
  //   border: "1px solid #ccc",
  //   display: "block",
  //   marginBottom: "15px",
  // },
  jobTitleInput: {
    // width: "376px", // Adjust width
    // height: "58px", // Adjust height
    padding: "10px",
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    borderRadius: "10px",
    border: "1px solid #ccc",
    // marginTop: "-16px",
  },
  jobDescriptionInput: {
    width: "788px", // Adjust width
    height: "169px", // Adjust height
    padding: "10px",
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
  locationInput: {
    width: "376px", // Adjust width
    height: "58px", // Adjust height
    padding: "10px",
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },   
  jobTitleInput: {
    width: "354px", // Adjust width
    height: "38px", // Adjust height
    padding: "10px",
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    borderRadius: "10px",
    border: "1px solid #ccc",
  }, 
  salaryContainer: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    // width: "374px",
    // height: "58px",
    // marginTop: "18px",
  },
  salaryInput: {
    width: "163px",
    height: "38px",
    padding: "10px",
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
  currencySymbol: {
    alignSelf: "center",
    fontSize: "14px",
    fontWeight: "bold",
  },
  textarea: {
    // width: "768px",
    // height: "202px",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
  },
  saveDraft: {
    width: "232px",
    height: "59px",
    padding: "5px",
    background: "white",
    fontFamily: "Inter, sans-serif",
    color: "black",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "10px",
    border: "1px solid #ccc",
    cursor: "pointer",
  },
  publish: {
    width: "232px",
    height: "59px",
    padding: "10px",
    marginRight: "34px",
    background: "#00AAFF",
    color: "white",
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "bold",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  },
  
};

export default JobOpeningForm;
