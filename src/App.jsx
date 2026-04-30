import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ShowProject } from './components/ShowProject';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ShowProject />
      </div>
    </LanguageProvider>
  );
}

export default App;
