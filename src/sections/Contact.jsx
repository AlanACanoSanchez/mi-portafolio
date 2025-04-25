import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

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
        alert('✅ ¡Mensaje enviado con éxito!');
        form.current.reset();
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
            ¡No dudes en contactarme!
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            ¡Verás como en un <strong>instante</strong> nos ponemos en contacto contigo! 
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
        <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-xl">
          <div>
            <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">Nombre completo</label>
            <input type="text" name="name" required className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">Correo electrónico</label>
            <input type="email" name="email" required className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">Mensaje</label>
            <textarea name="message" rows="5" required className="w-full px-4 py-2 border rounded-lg resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
