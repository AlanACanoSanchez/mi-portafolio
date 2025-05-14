import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";

import Home from "./sections/Home";
import About from "./sections/About"
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";


function App() {

  const { t } = useTranslation();

  return (
    <>
      <Navbar />

      <main className="pt-20 bg-white dark:bg-gray-900 transition-colors">

        {/* Inicio */}
        <Home />

        {/* Sobre mí */}
        <About/>

        {/* Tech Stack */}
        <TechStack/>

        {/* Proyectos */}
        <Projects/>

        {/* Certificaciones */}
        <Certifications/>

        {/* Contacto */}
        <Contact/>
      </main>
    </>
  );
}

export default App;
