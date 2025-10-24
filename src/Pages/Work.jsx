import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { ExternalLink } from "lucide-react";
import "./Work.css";
import AOS from "aos";
import "aos/dist/aos.css";

const allProjects = [
  { id: 1, name: "TO DO LIST", category: "React", desc: "Apple website clone built with HTML, CSS, and JavaScript.", link: 'https://todolistreact-beta.vercel.app/'},
  { id: 2, name: "EHR Data Analysis", category: "Data Science", desc: "Analyzed chronic kidney disease data using Python and Power BI."},
  { id: 3, name: "Search Image Engine", category: "JavaScript", desc: "Image search web app using Unsplash API integration.", link: 'https://www.linkedin.com/posts/saroj-medipakala-a912261a4_javascript-api-asyncprogramming-activity-7214233363350478848-6vjH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-7KI0BA1iAHlABCHTYETT4L52YmcUiznY' },
  { id: 4, name: "AEROWAYS - Flight Booking UI", category: "UI/UX", desc: "Flight booking app prototype designed in Figma.", link: "https://www.linkedin.com/posts/saroj-medipakala-a912261a4_uiuxdesign-figma-aeroway-activity-7176293583577055234-eIAb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-7KI0BA1iAHlABCHTYETT4L52YmcUiznY" },
  { id: 5, name: "Mobile - Portfolio Website", category: "Frontend", desc: "Responsive portfolio website made using React.", link: 'https://saroj2004.github.io/uptdPortfolio_Saroj-s/' },
  { id: 6, name: "Notes apk", category: "Backend", desc: "Signal classification using ML models and hardware data.", link: 'https://notesapk-client-dhx4.vercel.app/login'},
  { id: 7, name: "Expensive tracker", category: "React", desc: "A simple expense tracker to track money in a reliable way.", link: 'https://expensetrack-ashen.vercel.app/' }
];

const Work = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState(allProjects);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("A-Z");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.refresh(); // refresh AOS after projects update
  }, [projects]);

  const handleFilter = (category) => {
    setFilter(category);
    if (category === "All") setProjects(allProjects);
    else setProjects(allProjects.filter(p => p.category === category));
  };

  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...projects].sort((a, b) =>
      order === "A-Z" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setProjects(sorted);
  };

  return (
    <div>
      <Navbar />

      {isLoading ? (
        <div className="loader" style={{ marginTop: "150px", textAlign: "center" }}>
          <div className="spinner"></div>
          <p style={{ color: "#c6bdbe89", fontSize: "20px", fontWeight: "400" }}>Loading Projects...</p>
        </div>
      ) : (
        <div className="projects-section" style={{ textAlign: "center", marginTop: "150px" }}>
          <h1 style={{ color: "white" }}>My Projects</h1>
          <p style={{ color: "#aaa" }}>
            A collection of projects I've been working on. From code editors <br /> to deployed live web-applications,
            here's what keeps me busy.
          </p>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            {["All", "Frontend", "React", "Data Science", "UI/UX", "Backend"].map(cat => (
              <button
                key={cat}
                className={filter === cat ? "active" : ""}
                onClick={() => handleFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="sort-dropdown">
            <select onChange={(e) => handleSort(e.target.value)} value={sortOrder}>
              <option value="A-Z">Sort A–Z</option>
              <option value="Z-A">Sort Z–A</option>
            </select>
          </div>

          {/* Project Cards */}
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card" data-aos="fade">
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <div className="project-footer">
                  <span className="category">{project.category}</span>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
