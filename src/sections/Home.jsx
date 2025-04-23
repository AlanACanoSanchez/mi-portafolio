import { useTranslation } from "react-i18next";
import profileImg from "../assets/alan-cano.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl gap-10">
        {/* Imagen */}
        <div className="flex justify-center md:justify-start">
          <img
            src={profileImg}
            alt="Foto de Alan Cano"
            className="rounded-full w-72 md:w-96 shadow-xl object-cover"
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t("intro_title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            {t("intro_subtitle")}
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400 mb-4">
            {t("intro_details")}
          </p>

          <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
            {t("intro_bio")}
          </p>

          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            {t("intro_cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
