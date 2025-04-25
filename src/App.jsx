import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";

import Home from "./sections/Home";
import About from "./sections/About"
import TechStack from "./sections/TechStack";
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
        <section id="projects" className="py-32 bg-gray-100 dark:bg-gray-800 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">{t("projects")}</h2>
          <p className="text-gray-600 dark:text-gray-300">Aquí irán tus proyectos destacados</p>
        </section>

        {/* Certificaciones */}
        <Certifications/>

        {/* Contacto */}
        <Contact/>
      </main>
    </>
  );
}

export default App;
