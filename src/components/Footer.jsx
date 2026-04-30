import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useLanguage } from "../i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const footerT = t("footer");

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/douglashenriqueduarte/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://facebook.com/douglasduarte" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://instagram.com/douglashduarte1" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>{footerT.copyright}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
