import React, { useState } from 'react';
import certificate1 from "../assets/entorno_virtuales_anaconda_jupyter.png";
import certificate2 from "../assets/ciencia_datos_jupyternotebooks_anaconda.png";
import certificate3 from "../assets/understanding_data_visualization.png";
import certificate4 from "../assets/cleaning_data.png";
import certificate5 from "../assets/curso-powerbi.png";
import certificate6 from "../assets/analisis_dax_powerbi.png";
import certificate7 from "../assets/powerbiavanzado.png";

import { useTranslation } from "react-i18next";

const certifications = [
    {
      title: "certificate1",
      image: certificate1,
      link: 'https://platzi.com/p/cs4lan01/curso/10927-course/diploma/detalle/',
    },
    {
      title: "certificate2",
      image: certificate2,
      link: 'https://platzi.com/p/cs4lan01/curso/2434-course/diploma/detalle/',
    },
    {
      title: "certificate3",
      image: certificate3,
      link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/2c50a91219c10ba7dc2bdf35149b08f47bdc0108',
    },
    {
      title: "certificate4",
      image: certificate4,
      link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/7be44a69164c3ce3e8bffb7aeed9c201e72a4b40',
    },
    {
      title: "certificate5",
      image: certificate5,
      link: 'https://platzi.com/p/cs4lan01/curso/10200-course/diploma/detalle/',
    },
    {
      title: "certificate6",
      image: certificate6,
      link: 'https://platzi.com/p/cs4lan01/curso/8121-course/diploma/detalle/',
    },
    {
      title: "certificate7",
      image: certificate7,
      link: 'https://platzi.com/p/cs4lan01/curso/11820-course/diploma/detalle/',
    },
    // Puedes seguir agregando más aquí
  ];
  
  const Certifications = () => {
    const initialVisible = 6;
    const [visibleCount, setVisibleCount] = useState(initialVisible);
    const { t } = useTranslation();
  
    const showMore = () => {
      setVisibleCount(certifications.length);
    };
  
    const showLess = () => {
      setVisibleCount(initialVisible);
    };
  
    return (
              <section 
          id="certifications"
          className="py-24 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 shadow-md dark:shadow-none"
        >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t("certifications")}</h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {certifications.slice(0, visibleCount).map((cert) => (
              <div key={cert.title} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <h3 className="text-xl font-semibold mb-4 text-center">{t(cert.title)}</h3>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block text-center px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
                  >
                    {t("viewCertificate")}
                  </a>
                </div>
              </div>
            ))}
          </div>
  
          <div className="flex justify-center mt-8">
            {visibleCount < certifications.length ? (
              <button
                onClick={showMore}
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
              >
                {t("showMore")}
              </button>
            ) : certifications.length > initialVisible ? (
              <button
                onClick={showLess}
                className="px-6 py-2 bg-gray-500 text-white font-medium rounded hover:bg-gray-600 transition"
              >
                {t("showLess")}
              </button>
            ) : null}
          </div>
        </div>
      </section>
    );
  };
  
  export default Certifications;