import React from 'react';
import { useTranslation } from "react-i18next";

const technologies = [
  { name: 'Python', icon: 'devicon-python-plain', needsBackground: true },
  { name: 'Pandas', icon: 'devicon-pandas-plain', needsBackground: true },
  { name: 'NumPy', icon: 'devicon-numpy-plain' , needsBackground: true},
  { name: 'Matplotlib', icon: 'devicon-matplotlib-plain' , needsBackground: true},
  { name: 'React', icon: 'devicon-react-original' , needsBackground: true},
  { name: 'Vite', icon: 'devicon-vitejs-plain', needsBackground: true },
  { name: 'JavaScript', icon: 'devicon-javascript-plain', needsBackground: true },
  { name: 'Node.js', icon: 'devicon-nodejs-plain', needsBackground: true },
  { name: 'Express.js', icon: 'devicon-express-original' , needsBackground: true},
  { name: 'Postman', icon: 'devicon-postman-plain' , needsBackground: true},
  { name: 'MySQL', icon: 'devicon-mysql-plain' , needsBackground: true},
  { name: 'GitHub', icon: 'devicon-github-plain', needsBackground: true },
];

const TechStack = () => {

  const { t } = useTranslation();

  return (
        <section 
          id="techstack"
          className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors shadow-md dark:shadow-none"
        >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        {t("tech_stack")}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <i
              className={`${tech.icon} text-4xl ${
                tech.needsBackground ? 'bg-white p-2 rounded-full shadow-md' : ''
              }`}
            ></i>
            <span className="mt-2 text-center text-gray-700 dark:text-gray-200">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
