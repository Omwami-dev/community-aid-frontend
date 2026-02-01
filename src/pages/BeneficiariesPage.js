import React, { useEffect, useState } from "react";

function BeneficiariesPage() {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState({ project: "all", approved: "all" });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name_asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch beneficiaries
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/beneficiaries/")
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setBeneficiaries(data.results);
        } else {
          setBeneficiaries(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // Fetch projects
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then((res) => res.json())
      .then((data) => {
        const projectList = data.results || data;
        setProjects(projectList);
      })
      .catch((err) => console.error(err));
  }, []);

  // Filter handlers
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    setCurrentPage(1); // reset to first page
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // reset to first page
  };

  const handleSortChange = (e) => setSortOption(e.target.value);

  // Apply filters + search
  let filtered = beneficiaries.filter((b) => {
    const projectMatch =
      filters.project === "all" || b.project_name === filters.project;
    const approvedMatch =
      filters.approved === "all" ||
      (filters.approved === "approved" && b.approved) ||
      (filters.approved === "not_approved" && !b.approved);
    const searchMatch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return projectMatch && approvedMatch && searchMatch;
  });

  // Apply sorting
  filtered.sort((a, b) => {
    switch (sortOption) {
      case "name_asc":
        return a.name.localeCompare(b.name);
      case "name_desc":
        return b.name.localeCompare(a.name);
      case "project_asc":
        return a.project_name.localeCompare(b.project_name);
      case "project_desc":
        return b.project_name.localeCompare(a.project_name);
      case "approved_first":
        return b.approved - a.approved;
      case "not_approved_first":
        return a.approved - b.approved;
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Beneficiaries</h1>
      <p style={paragraphStyle}>
        These are the wonderful individuals and communities supported through the efforts
        of <strong>Innocious Foundation</strong>. Each contribution helps transform lives
        and foster sustainable development.
      </p>

      {/* Filters, Search & Sort */}
      <div style={filtersStyle}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={searchInputStyle}
        />
        <select
          name="project"
          value={filters.project}
          onChange={handleFilterChange}
          style={selectStyle}
        >
          <option value="all">All Projects</option>
          {projects.map((p) => (
            <option key={p.id} value={p.title}>
              {p.title}
            </option>
          ))}
        </select>

        <select
          name="approved"
          value={filters.approved}
          onChange={handleFilterChange}
          style={selectStyle}
        >
          <option value="all">All Statuses</option>
          <option value="approved">Approved ✅</option>
          <option value="not_approved">Not Approved ❌</option>
        </select>

        <select
          value={sortOption}
          onChange={handleSortChange}
          style={selectStyle}
        >
          <option value="name_asc">Name A → Z</option>
          <option value="name_desc">Name Z → A</option>
          <option value="project_asc">Project A → Z</option>
          <option value="project_desc">Project Z → A</option>
          <option value="approved_first">Approved First ✅</option>
          <option value="not_approved_first">Not Approved First ❌</option>
        </select>
      </div>

      {paginated.length === 0 ? (
        <p style={emptyStyle}>No beneficiaries match the current filters.</p>
      ) : (
        <div style={gridStyle}>
          {paginated.map((b) => (
            <div key={b.id} style={cardStyle}>
              <h2 style={cardTitleStyle}>{b.name}</h2>
              <p style={cardTextStyle}>
                <strong>Contact:</strong> {b.contact}
              </p>
              <p style={cardTextStyle}>
                <strong>Approved:</strong> {b.approved ? "Yes ✅" : "No ❌"}
              </p>
              <p style={cardTextStyle}>
                <strong>Project:</strong> {b.project_name}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div style={paginationStyle}>
          <button
            style={paginationButtonStyle}
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span style={pageInfoStyle}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            style={paginationButtonStyle}
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

// Styles
const containerStyle = {
  padding: "20px",
  maxWidth: "900px",
  margin: "auto",
  fontFamily: "Arial, sans-serif",
};

const headingStyle = {
  textAlign: "center",
  color: "#2c3e50",
  marginBottom: "15px",
};

const paragraphStyle = {
  textAlign: "center",
  color: "#555",
  marginBottom: "20px",
  lineHeight: "1.6",
};

const filtersStyle = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const searchInputStyle = {
  padding: "8px 12px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  minWidth: "200px",
};

const selectStyle = {
  padding: "8px 12px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const emptyStyle = {
  textAlign: "center",
  color: "#888",
  marginTop: "30px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
  textAlign: "center",
};

const cardTitleStyle = {
  fontSize: "1.2rem",
  marginBottom: "10px",
  color: "#2c3e50",
};

const cardTextStyle = {
  fontSize: "1rem",
  marginBottom: "8px",
  color: "#555",
};

const paginationStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  gap: "10px",
};

const paginationButtonStyle = {
  padding: "8px 12px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  cursor: "pointer",
  backgroundColor: "#fff",
};

const pageInfoStyle = {
  fontSize: "1rem",
  color: "#555",
};

export default BeneficiariesPage;







