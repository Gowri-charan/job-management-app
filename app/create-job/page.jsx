"use client";
// import Navbar from "../components/Navbar";
import InputDesign from "../components/InputDesign"; // Ensure this is the correct path
import Navbar from "@/components/Navbar"; // Ensure correct path
import SearchFilters from "@/components/SearchFilters";
import JobGrid from "@/components/JobGrid";
import JobOpeningForm from "@/components/JobOpeningForm"; // Ensure correct path

export default function CreateJobPage() {
  return (
    <div>
      <Navbar />
      <InputDesign />
      <SearchFilters />
      <JobGrid />
      <JobOpeningForm />
    </div>
  );
}
