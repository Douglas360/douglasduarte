import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import image from "../assets/img/index";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useLanguage } from "../i18n/LanguageContext";
import { getProjects } from "../data/projectsData";

const FILTERS = [
  { key: "all", labelPt: "Todos", labelEn: "All" },
  { key: "web3", labelPt: "Web3", labelEn: "Web3" },
  { key: "fullstack", labelPt: "Full Stack", labelEn: "Full Stack" },
  { key: "frontend", labelPt: "Front-End", labelEn: "Front-End" },
  { key: "design", labelPt: "Design", labelEn: "Design" },
];

const ProjectCard = ({ project, onClick }) => (
  <div className="proj-card" onClick={() => onClick(project.slug)}>
    <div className="proj-card-img-wrap">
      <img src={project.imgUrl} alt={project.title} className="proj-card-img" />
      <div className="proj-card-overlay" style={{ "--card-accent": project.accentColor }} />
      <span className="proj-card-category" style={{ background: `${project.accentColor}cc` }}>
        {project.categoryLabel}
      </span>
    </div>
    <div className="proj-card-body">
      <h3 className="proj-card-title">{project.title}</h3>
      <p className="proj-card-desc">{project.description}</p>
      <div className="proj-card-stack">
        {project.techStack.slice(0, 4).map((tech, i) => (
          <span key={i} className="proj-card-tech" style={{ borderColor: `${project.accentColor}66`, color: project.accentColor }}>
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="proj-card-tech proj-card-tech--more">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
      <button
        className="proj-card-btn"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}99)` }}
      >
        Ver Projeto →
      </button>
    </div>
  </div>
);

export const Projects = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const projectsT = t("projects");

  const allProjects = getProjects(language);
  const filtered =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  const handleCardClick = (slug) => {
    navigate(`/project/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2>{projectsT.title}</h2>
              <p className="projects-subtitle">{projectsT.description}</p>

              {/* Filter Pills */}
              <div className="proj-filters">
                {FILTERS.map((f) => (
                  <button
                    key={f.key}
                    className={`proj-filter-btn ${activeFilter === f.key ? "active" : ""}`}
                    onClick={() => setActiveFilter(f.key)}
                  >
                    {language === "pt" ? f.labelPt : f.labelEn}
                    <span className="proj-filter-count">
                      {f.key === "all"
                        ? allProjects.length
                        : allProjects.filter((p) => p.category === f.key).length}
                    </span>
                  </button>
                ))}
              </div>

              {/* Cards Grid */}
              <div
                className={`proj-grid ${isVisible ? "animate__animated animate__slideInUp" : ""}`}
              >
                {filtered.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={handleCardClick}
                  />
                ))}
              </div>
            </div>
          )}
        </TrackVisibility>
      </Container>
      <img
        className="background-image-right"
        src={image.colorSharp2}
        alt="ColorSharp"
      />
    </section>
  );
};
