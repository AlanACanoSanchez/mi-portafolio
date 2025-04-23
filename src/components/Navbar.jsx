// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation();


  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div
          className="font-bold text-xl text-blue-600 dark:text-white cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          Alan Cano
        </div>
        <ul className="flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
          <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollTo("home")}>{t("home")}</li>
          <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollTo("about")}>{t("about_title")}</li>
          <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollTo("techstack")}>{t("tech_stack")}</li>
          <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollTo("projects")}>{t("projects")}</li>
          <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollTo("certifications")}>{t("certifications")}</li>
          <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollTo("contact")}>{t("contact")}</li>
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 px-3 py-1 border border-gray-400 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
        <div className="flex gap-2 text-sm ml-4">
            <button
                onClick={() => i18n.changeLanguage("es")}
                className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-blue-200 dark:hover:bg-blue-500 transition"
            >
                🇪🇸
            </button>
            <button
                onClick={() => i18n.changeLanguage("en")}
                className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-blue-200 dark:hover:bg-blue-500 transition"
            >
                🇺🇸
            </button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
