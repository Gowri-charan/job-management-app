"use client";

import { px } from "@mantine/core";
import { useState } from "react";

const SearchFilters = () => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [jobTypeOpen, setJobTypeOpen] = useState(false);

  return (
    <div style={styles.container}>
      {/* Search Input */}
      <div style={styles.searchBox}>
        <span dangerouslySetInnerHTML={{ __html: searchIcon }} />
        <input type="text" placeholder="Search By Job Title, Role" style={styles.input} />
      </div>

      {/* Preferred Location */}
      <div style={styles.divider} />
      <div style={styles.dropdownContainer}>
        <div style={styles.filter} onClick={() => setLocationOpen(!locationOpen)}>
          <span dangerouslySetInnerHTML={{ __html: locationIcon }} />
          <span>Preferred Location</span>
          <span dangerouslySetInnerHTML={{ __html: dropdownIcon }} />
        </div>
        {locationOpen && (
          <div style={styles.dropdownMenu}>
            <div>Remote</div>
            <div>On-site</div>
            <div>Hybrid</div>
          </div>
        )}
      </div>

      {/* Job Type */}
      <div style={styles.divider} />
      <div style={styles.dropdownContainer}>
        <div style={styles.filter} onClick={() => setJobTypeOpen(!jobTypeOpen)}>
          <span dangerouslySetInnerHTML={{ __html: jobTypeIcon }} />
          <span>Job Type</span>
          <span dangerouslySetInnerHTML={{ __html: dropdownIcon }} />
        </div>
        {jobTypeOpen && (
          <div style={styles.dropdownMenu}>
            <div>Full-time</div>
            <div>Part-time</div>
            <div>Contract</div>
            <div>Internship</div>
          </div>
        )}
      </div>

      {/* Salary Range */}
      <div style={styles.divider} />
      <div style={styles.salary}>
        <span>Salary Per Month</span>
        <div style={styles.slider}>
          <span>₹50k - ₹80k</span>
          <input type="range" min="50000" max="80000" style={styles.range} />
        </div>
      </div>
    </div>
  );
};

const searchIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 13L19 19M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z" stroke="#686868" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const locationIcon = `<svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7808 19.7005L11.1906 19.2377L11.7808 19.7005ZM6.21921 19.7005L5.62903 20.1633L6.21921 19.7005ZM9 22.0055V21.2555V22.0055ZM16.25 9.6087C16.25 10.8352 15.6104 12.4764 14.6037 14.256C13.6137 16.0063 12.3342 17.7794 11.1906 19.2377L12.371 20.1633C13.5371 18.6762 14.8672 16.837 15.9094 14.9945C16.9349 13.1814 17.75 11.2494 17.75 9.6087H16.25ZM6.80938 19.2377C5.66578 17.7794 4.38628 16.0063 3.39625 14.256C2.38962 12.4764 1.75 10.8352 1.75 9.6087H0.25C0.25 11.2494 1.06511 13.1814 2.09064 14.9945C3.13277 16.837 4.46288 18.6762 5.62903 20.1633L6.80938 19.2377ZM1.75 9.6087C1.75 5.21571 5.04678 1.75 9 1.75V0.25C4.11666 0.25 0.25 4.49277 0.25 9.6087H1.75ZM9 1.75C12.9532 1.75 16.25 5.21571 16.25 9.6087H17.75C17.75 4.49277 13.8833 0.25 9 0.25V1.75ZM11.1906 19.2377C10.5717 20.027 10.1641 20.5426 9.79918 20.8741C9.46635 21.1764 9.24418 21.2555 9 21.2555V22.7555C9.72906 22.7555 10.2948 22.4504 10.8078 21.9844C11.2886 21.5476 11.7849 20.9107 12.371 20.1633L11.1906 19.2377ZM5.62903 20.1633C6.21511 20.9107 6.71136 21.5476 7.19224 21.9844C7.70524 22.4504 8.27094 22.7555 9 22.7555V21.2555C8.75582 21.2555 8.53365 21.1764 8.20082 20.8741C7.83587 20.5426 7.42834 20.027 6.80938 19.2377L5.62903 20.1633ZM5.25 10C5.25 12.0711 6.92893 13.75 9 13.75V12.25C7.75736 12.25 6.75 11.2426 6.75 10H5.25ZM9 13.75C11.0711 13.75 12.75 12.0711 12.75 10H11.25C11.25 11.2426 10.2426 12.25 9 12.25V13.75ZM12.75 10C12.75 7.92893 11.0711 6.25 9 6.25V7.75C10.2426 7.75 11.25 8.75736 11.25 10H12.75ZM9 6.25C6.92893 6.25 5.25 7.92893 5.25 10H6.75C6.75 8.75736 7.75736 7.75 9 7.75V6.25Z" fill="#686868"/>
</svg>`;
const jobTypeIcon = `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 17C13 14.7909 10.3137 13 7 13C3.68629 13 1 14.7909 1 17M14.8281 3.17188C15.1996 3.54331 15.4942 3.98427 15.6952 4.46957C15.8962 4.95487 15.9999 5.47533 15.9999 6.00062C15.9999 6.52591 15.8963 7.04497 15.6953 7.53027C15.4943 8.01558 15.1996 8.45705 14.8281 8.82848M17 1C17.6566 1.65661 18.1775 2.43612 18.5328 3.29402C18.8882 4.15192 19.0718 5.07127 19.0718 5.99985C19.0718 6.92844 18.8886 7.84815 18.5332 8.70605C18.1778 9.56396 17.6566 10.3435 17 11.0001M7 10C4.79086 10 3 8.20914 3 6C3 3.79086 4.79086 2 7 2C9.20914 2 11 3.79086 11 6C11 8.20914 9.20914 10 7 10Z" stroke="#686868" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const dropdownIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 10L15.2527 11.763C13.8592 13.1689 13.1625 13.8719 12.3133 13.9801C12.1053 14.0066 11.8947 14.0066 11.6867 13.9801C10.8375 13.8719 10.1408 13.1689 8.74731 11.763L7 10" stroke="#686868" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "20px",
    padding: "50px",
    background: "#fff",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "100%",
    fontFamily: "'Inter', sans-serif",
    justifyContent: "space-between",
    overflowX: "hidden", // Prevent horizontal scrolling
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    paddingLeft: "80px",
    borderRadius: "8px",
    width: "300px",
  },
  input: {
    border: "none",
    outline: "none",
    fontSize: "16px",
    width: "100%",
  },
  dropdownContainer: {
    position: "relative",
    width: "120px",
  },
  filter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "5px",
    padding: "10px",
    cursor: "pointer",
    fontWeight: "500",
  },
  dropdownMenu: {
    position: "absolute",
    top: "40px",
    left: "0",
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    padding: "10px",
    minWidth: "100px",
    zIndex: 1000
  },
  salary: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "500",
    paddingRight: "100px",
    
  },
  slider: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "500",
    color: "#000",
  },
  range: {
    width: "120x",
    accentColor: "black", // Making slider black like the reference
  },
  divider: {
    height: "30px",
    width: "1px",
    background: "#ddd",
  },
};

export default SearchFilters;
