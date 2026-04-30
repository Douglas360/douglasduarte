import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import images from "../assets/img/index";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export const NavBar = () => {
  const { t, language, setLanguage } = useLanguage();
  const navT = t("nav");

  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/" onClick={handleLogoClick}>
          <img src={images.logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              {navT.home}
            </Nav.Link>
            <Nav.Link
              href="/#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              {navT.skills}
            </Nav.Link>
            <Nav.Link
              href="/#projects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("projects")}
            >
              {navT.projects}
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/douglashenriqueduarte/" target="_blank" rel="noreferrer">
                <img src={images.navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://facebook.com/douglasduarte" target="_blank" rel="noreferrer">
                <img src={images.navIcon2} alt="Facebook" />
              </a>
              <a href="https://instagram.com/douglashduarte1" target="_blank" rel="noreferrer">
                <img src={images.navIcon3} alt="Instagram" />
              </a>
            </div>
            <button
              className="lang-toggle"
              onClick={toggleLanguage}
              title={language === "en" ? "Mudar para Português" : "Switch to English"}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.5)",
                color: "#fff",
                borderRadius: "20px",
                padding: "4px 12px",
                fontSize: "13px",
                cursor: "pointer",
                marginRight: "10px",
                fontWeight: "600",
                letterSpacing: "0.5px",
                transition: "all 0.3s ease",
              }}
            >
              {language === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
            </button>
            <HashLink to="/#connect">
              <button className="vvd">
                <span>{navT.contact}</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
