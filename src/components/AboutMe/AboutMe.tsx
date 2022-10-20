import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="about-me">
      <p className="about-me__text">
        <span>
          I'm a Moscow-based Front-End Developer who specializes in building exceptional digital
          experiences. I strive to create immersive, beautiful, user-friendly websites and web
          applications with quality and carefully designed code.
        </span>
        <br />
        <span>
          I work on making web applications better based on interactive design using animations and
          smooth transitions.
        </span>
        <br />
        <span>
          I always care about what I create. I keep learning new things, challenging myself and
          doing interesting things that matter. I enjoy gaining experience in the field of web
          development and discovering something new for myself.
        </span>
      </p>
      <h3>Here are a few technologies I've been working with recently:</h3>
      <div className="about-me__tech">
        <div className="about-me__tech-col">
          <p className="about-me__tech-single">HTML5</p>
          <p className="about-me__tech-single">CSS (SCSS, TailwindCSS)</p>
          <p className="about-me__tech-single">JavaScript (ES6+)</p>
          <p className="about-me__tech-single">Vue (Vuex, VueRouter)</p>
          <p className="about-me__tech-single">React (Redux, ReactRouter)</p>
        </div>
        <div className="about-me__tech-col">
          <p className="about-me__tech-single">TypeScript</p>
          <p className="about-me__tech-single">ESLint</p>
          <p className="about-me__tech-single">Prettier</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
