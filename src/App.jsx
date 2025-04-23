import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";

import Home from "./sections/Home";

function App() {

  const { t } = useTranslation();

  return (
    <>
      <Navbar />

      <main className="pt-20 bg-white dark:bg-gray-900 transition-colors">

        {/* Inicio */}
        <Home />

        {/* Sobre mí */}
        <section id="about" className="py-32 bg-gray-100 dark:bg-gray-800 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">{t("about_title")}</h2>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
            {t("about_description")}
          </p>
        </section>

        {/* Tech Stack */}
        <section id="techstack" className="py-32 bg-white dark:bg-gray-900 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">{t("tech_stack")}</h2>
          <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
            {[
              "React", "Vite", "Tailwind CSS", "JavaScript", "Python", "SQL", "Pandas", "Git", "GitHub", "Node.js"
            ].map((tech) => (
              <div
                key={tech}
                className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos */}
        <section id="projects" className="py-32 bg-gray-100 dark:bg-gray-800 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">{t("projects")}</h2>
          <p className="text-gray-600 dark:text-gray-300">Aquí irán tus proyectos destacados</p>
        </section>

        {/* Certificaciones */}
        <section id="certifications" className="py-32 bg-white dark:bg-gray-900 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">{t("certifications")}</h2>
          <p className="text-gray-600 dark:text-gray-300">Aquí mostraremos tus certificaciones</p>
        </section>

        {/* Contacto */}
        <section id="contact" className="py-32 bg-gray-100 dark:bg-gray-800 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">{t("contact")}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Puedes contactarme directamente por mis redes:</p>
          <div className="flex justify-center gap-6 text-2xl text-blue-600 dark:text-blue-400">
            <a href="https://github.com/TuUsuario" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/TuUsuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/AlanCanoCV.pdf" download>📄 CV</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
