import { useTranslation } from "react-i18next";
import kickboxingImg from "../assets/kickboxing-1.jpg";
import natureImg1 from "../assets/nature-1.jpg";
import natureImg2 from "../assets/nature-2.jpg";
import heroesImg from "../assets/heroes.jpg";
import relaxImg from "../assets/relax.jpg";
import friendsImg from "../assets/friends.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
      <section
        id="about"
        className="py-24 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 shadow-md dark:shadow-none"
      >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Texto a la izquierda */}
        <div>
          <h2 className="text-4xl font-bold mb-6">{t("about_title")}</h2>
          <p className="text-lg leading-relaxed whitespace-pre-line">
            {t("about_text")}
          </p>
        </div>

        {/* Galería de imágenes tipo collage a la derecha */}
        <div className="columns-2 md:columns-3 gap-4 w-full max-w-5xl pt-4">

            <img
                src={kickboxingImg}
                alt="Kickboxing"
                className="w-full mb-4 rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <img
            src={friendsImg}
            alt="Con amigos"
            className="w-full h-auto mb-4 rounded-lg md:col-span-2 transition-transform duration-300 hover:scale-105"
            />

            <img
                src={natureImg1}
                alt="Jacarandas"
                className="w-full mb-4 rounded-lg transition-transform duration-300 hover:scale-105"
            />

            <img
                src={natureImg2}
                alt="Atardecer en la playa"
                className="w-full mb-4 rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <img
                src={heroesImg}
                alt="Superhéroes"
                className="w-full mb-4 rounded-lg transition-transform duration-300 hover:scale-105"
            />
            
            <img
                src={relaxImg}
                alt="Relajado en la naturaleza"
                className="w-full mb-4 rounded-lg transition-transform duration-300 hover:scale-105"
            />
        </div>


      </div>
    </section>
  );
};

export default About;
