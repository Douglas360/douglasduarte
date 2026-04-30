import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { LanguageProvider } from './i18n/LanguageContext';

const HomePage = () => (
  <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectDetailPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
