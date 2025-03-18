import Navbar from "@/components/Navbar"; // Ensure correct path
import SearchFilters from "@/components/SearchFilters";
import JobGrid from "@/components/JobGrid";

import "../components/JobOpeningForm"
export default function Page() {
  return (
    <div>
      <Navbar />
      <SearchFilters />
      <JobGrid />
    </div>
  );
}
