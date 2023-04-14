import "./About.css";
import myPhoto from "./myPhoto.jpg"


const About = () => {
  return (
    <div className="about-container">
      <div className="photo-container">
        <img src={myPhoto} alt="Jhohan Cortes" />
      </div>
      <h2>Jhohan Cortes</h2>
      <p className="about-text">Estudiante de Henry</p>
      <p className="about-text">
        ¡Hola! Soy un estudiante novato entusiasmado por aprender sobre el mundo del desarrollo web. Me apasiona descubrir nuevas tecnologías y herramientas que me permitan crear soluciones innovadoras y eficientes. Estoy emocionado por la oportunidad de formar parte de la comunidad de desarrolladores y aprender de profesionales experimentados. Aunque todavía tengo mucho por aprender, estoy dispuesto a trabajar duro para alcanzar mis metas y convertirme en un desarrollador full-stack de éxito.
      </p>
      <p className="about-text">No dudes en contactarme si tienes alguna pregunta o sugerencia.</p>
      <div className="social-icons">
        <a href="https://github.com/jhohancortes" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/jhohan-cortes/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:jhohancortes@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default About;
