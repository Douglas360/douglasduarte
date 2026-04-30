import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { getProjects } from "../data/projectsData";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import {
  FaReact, FaNode, FaCss3, FaAws, FaPython, FaEthereum, FaArrowLeft, FaExternalLinkAlt, FaGithub, FaTimes,
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiSolidity, SiIpfs, SiOpenzeppelin, SiChainlink, SiPostgresql, SiStripe,
} from "react-icons/si";
import { TbBrandNextjs, TbApi } from "react-icons/tb";

const techIcons = {
  React: <FaReact />,
  TypeScript: <SiTypescript />,
  Solidity: <SiSolidity />,
  NodeJs: <FaNode />,
  "Node.js": <FaNode />,
  Tailwindcss: <SiTailwindcss />,
  CSS: <FaCss3 />,
  AWS: <FaAws />,
  "AWS S3": <FaAws />,
  HardHat: <span style={{ fontWeight: "bold", fontSize: "0.75rem" }}>HH</span>,
  IPFS: <SiIpfs />,
  Python: <FaPython />,
  OpenZeppelin: <SiOpenzeppelin />,
  Ethereum: <FaEthereum />,
  NextJs: <TbBrandNextjs />,
  API: <TbApi />,
  Chainlink: <SiChainlink />,
  "Chainlink VRF": <SiChainlink />,
  PostgreSQL: <SiPostgresql />,
  Stripe: <SiStripe />,
};

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const projects = getProjects(language);
  const project = projects.find((p) => p.slug === slug);
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) navigate("/", { replace: true });
  }, [project, navigate]);

  if (!project) return null;

  const allProjects = projects;
  const sameCategory = allProjects.filter(
    (p) => p.category === project.category && p.slug !== project.slug
  );
  const related = sameCategory.slice(0, 3);

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <NavBar />
      <div className="project-detail-page">
        {/* ── Hero ──────────────────────────────────────────── */}
        <div
          className="project-detail-hero"
          style={{ "--accent": project.accentColor }}
        >
          <div className="project-detail-hero-overlay" />
          <img
            src={project.imgUrl}
            alt={project.title}
            className="project-detail-hero-img"
          />
          <div className="project-detail-hero-content">
            <button className="project-detail-back" onClick={handleBack}>
              <FaArrowLeft /> {language === "pt" ? "Voltar" : "Back"}
            </button>
            <span className="project-detail-category">{project.categoryLabel}</span>
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-subtitle">{project.subTitle}</p>
          </div>
        </div>

        {/* ── Body ──────────────────────────────────────────── */}
        <div className="project-detail-body">
          <div className="project-detail-container">
            <div className="project-detail-main">
              {/* Description */}
              <section className="project-detail-section">
                <h2 className="project-detail-section-title">
                  {language === "pt" ? "Sobre o Projeto" : "About the Project"}
                </h2>
                <p className="project-detail-description">{project.description}</p>
              </section>

              {/* Highlights */}
              <section className="project-detail-section">
                <h2 className="project-detail-section-title">
                  {language === "pt" ? "Principais Features" : "Key Features"}
                </h2>
                <ul className="project-detail-highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="project-detail-highlight-item">
                      <span
                        className="project-detail-highlight-dot"
                        style={{ background: project.accentColor }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <section className="project-detail-section">
                  <h2 className="project-detail-section-title">
                    {language === "pt" ? "Galeria do Projeto" : "Project Gallery"}
                  </h2>
                  <div className="project-detail-gallery-grid">
                    {project.gallery.map((img, i) => (
                      <div 
                        key={i} 
                        className="project-detail-gallery-item"
                        onClick={() => setLightboxImg(img)}
                      >
                        <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="project-detail-gallery-img" />
                        <div className="project-detail-gallery-overlay">
                          <FaExternalLinkAlt style={{ color: 'white', fontSize: '1.2rem' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="project-detail-sidebar">
              {/* Tech Stack */}
              <div className="project-detail-card">
                <h3 className="project-detail-card-title">Tech Stack</h3>
                <div className="project-detail-tech-grid">
                  {project.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="project-detail-tech-badge"
                      style={{ "--badge-accent": project.accentColor }}
                    >
                      <span className="project-detail-tech-icon">
                        {techIcons[tech] || <span style={{ fontSize: "0.7rem", fontWeight: 700 }}>{tech.slice(0, 2).toUpperCase()}</span>}
                      </span>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="project-detail-card">
                <h3 className="project-detail-card-title">
                  {language === "pt" ? "Links" : "Links"}
                </h3>
                <div className="project-detail-cta-group">
                  <a
                    href="https://github.com/Douglas360"
                    target="_blank"
                    rel="noreferrer"
                    className="project-detail-cta project-detail-cta--secondary"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href="#connect"
                    className="project-detail-cta project-detail-cta--primary"
                    onClick={(e) => { e.preventDefault(); handleBack(); setTimeout(() => { document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" }); }, 200); }}
                    style={{ background: project.accentColor }}
                  >
                    <FaExternalLinkAlt /> {language === "pt" ? "Contato" : "Contact"}
                  </a>
                </div>
              </div>

              {/* Category info */}
              <div className="project-detail-card">
                <h3 className="project-detail-card-title">
                  {language === "pt" ? "Categoria" : "Category"}
                </h3>
                <span
                  className="project-detail-category-badge"
                  style={{ background: `${project.accentColor}22`, border: `1px solid ${project.accentColor}66`, color: project.accentColor }}
                >
                  {project.categoryLabel}
                </span>
              </div>
            </aside>
          </div>

          {/* ── Related Projects ────────────────────────────── */}
          {related.length > 0 && (
            <div className="project-detail-related">
              <h2 className="project-detail-related-title">
                {language === "pt" ? "Projetos Relacionados" : "Related Projects"}
              </h2>
              <div className="project-detail-related-grid">
                {related.map((rel) => (
                  <div
                    key={rel.slug}
                    className="project-detail-related-card"
                    onClick={() => {
                      navigate(`/project/${rel.slug}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="project-detail-related-img-wrap">
                      <img src={rel.imgUrl} alt={rel.title} />
                      <div
                        className="project-detail-related-overlay"
                        style={{ background: `${rel.accentColor}cc` }}
                      />
                    </div>
                    <div className="project-detail-related-info">
                      <span className="project-detail-related-label" style={{ color: rel.accentColor }}>
                        {rel.categoryLabel}
                      </span>
                      <h4 className="project-detail-related-name">{rel.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
              <FaTimes />
            </button>
            <img src={lightboxImg} alt="Enlarged design" className="lightbox-img" />
          </div>
        </div>
      )}
    </>
  );
};
