import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaFileAlt, FaCheckCircle  } from 'react-icons/fa';

import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();
  const [statusMessage, setStatusMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        setShowSuccess(true);
        form.current.reset();
        setTimeout(() => setShowSuccess(false), 4000);
      },
      (error) => {
        alert('❌ Ocurrió un error. Intenta de nuevo.');
        console.error(error.text);
      }
    );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texto + Redes */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t("contactTalk")}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {t("contactdescription")}
          </p>
          <div className="flex gap-6 text-3xl text-blue-600 dark:text-blue-400">
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="/tu-cv.pdf" target="_blank" rel="noopener noreferrer">
              <FaFileAlt />
            </a>
          </div>
        </div>

        {/* Formulario */}
        <div className="relative">
          {showSuccess && (
            <div className="absolute top-[-80px] left-0 right-0 flex items-center justify-center bg-green-100 text-green-700 px-4 py-3 rounded-md shadow-md animate-bounce transition-all">
              <FaCheckCircle className="mr-2 text-green-500 text-2xl" />
              <span className="font-semibold">{t('contactosubmitmessaje')}</span>
            </div>
          )}
          <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-xl">
            <div>
              <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">{t("contactnamme")} </label>
              <input type="text" name="name" required className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">{t("contactemail")}</label>
              <input type="email" name="email" required className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">{t("contactmessaje")}</label>
              <textarea name="message" rows="5" required className="w-full px-4 py-2 border rounded-lg resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
              {t('contactsubmit')}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
