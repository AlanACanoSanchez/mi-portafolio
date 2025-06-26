import React from 'react';
import { useTranslation } from "react-i18next";
import ModalImage from 'react-modal-image';
import scrapping_x from '../assets/scrapping_x.png';
import radio_monitoring from '../assets/radio_monitoring.png';
import euro_dashboard from '../assets/euro_dashboard.png';
import cancun_fc_dashboard from '../assets/cancun_fc_dashboard.png';
import analisis_ecommerce from '../assets/analisis-ecommerce_dashboard.png';

const projects = [
  {
    title: "project_X",
    description: "project_X_description",
    technologies: ['Python', 'Selenium', 'React', 'Node.js', 'MySQL', 'PySentimiento'],
    image: scrapping_x,
    code: null,
    demo: null,
    private: true,
  },
  {
    title: "project_radio",
    description: "project_radio_description",
    technologies: ['Python', 'Flask', 'MySQL', 'PySentimiento'],
    image: radio_monitoring,
    code: null,
    demo: null,
    private: true,
  },
  {
    title: "project_defensive",
    description: "project_defensive_description",
    technologies: ['React JS', 'Python','Pandas'],
    image: euro_dashboard,
    code: null,
    demo: 'https://dashing-druid-8777b0.netlify.app/',
    private: false,
  },
  {
    title: "project_cancunfc",
    description: "project_cancunfc_description",
    technologies: ['React JS', 'Node.js', 'Express', 'MySQL', 'Postman','Python','Pandas'],
    image: cancun_fc_dashboard,
    code: null,
    demo: null,
    private: true,
  },
  {
    title: "project_analisisecommerce",
    description: "project_analisisecommerce_description",
    technologies: ['Python','Pandas','SQL Server','Power BI'],
    image: analisis_ecommerce,
    code: null,
    demo: 'https://github.com/AlanACanoSanchez/analisis-ecommerce',
    private: false,
  }
];


const Projects = () => {
  const { t } = useTranslation();
  return (
            <section 
          id="projects"
          className="py-24 px-6 bg-blue-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md dark:shadow-none"
        >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{t("projects")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="cursor-pointer">
                <ModalImage
                  small={project.image}
                  large={project.image}
                  alt={project.title}
                  hideDownload={true}
                  hideZoom={true}
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{t(project.title)}</h3>
                <p className="mb-4 text-sm">{t(project.description)}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.code || project.demo ? (
                  <div className="flex gap-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                      >
                        {t("view_demo")}
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded"
                      >
                        {t("view_code")}
                      </a>
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">{t("projects_private")}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
