//Styles
import '../styles/layout/main.scss';
//Images
import html5 from '../images/html5.svg';
import css3 from '../images/css3.svg';
import sass from '../images/sass.svg';
import js from '../images/js.svg';
import react from '../images/react.svg';
import gulp from '../images/gulp.svg';
import npm from '../images/npm.svg';
import zeplin from '../images/zeplin.png';
import git from '../images/git.svg';
import github from '../images/github.svg';
import vscode from '../images/vscode.svg';
import scrum from '../images/scrum.png';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p6 from '../images/p6.png';
import p7 from '../images/p7.png';

//Components
import ProjectItem from './secondary-components/ProjectItem';

const Main = (props) => {
  return (
    <main>
      <section id="aboutMe" className="aboutMe">
        <article className="about_container">
          <h2 className="about_mainTitle title">About Me</h2>
          <p className="about_text">
            I am a Junior Frontend Developer who discovered programming thanks
            to my surroundings, and fell in love with the community, the
            creativity and the possibility of making an impact on society. My
            previous work experiences have made me a very adaptable person who
            enjoys continuous learning.
          </p>
          <p className="about_text">
            My hobbies include taking care of my people, nature, sports and
            traveling.
          </p>
          <p className="about_text">
            I consider myself a hard-working and fast-learner person, who enjoys
            challenges..
          </p>
          <div className="div_download">
            <a
              className="link_download"
              href="https://drive.google.com/file/d/1KOCH1zDOpmJZDOBgVosi_BuWFd0QrhfF/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download English CV
            </a>
            <a
              className="link_download"
              href="https://drive.google.com/file/d/1BCwVeIoUrcUGavLogughw3Z3h9Jqf-ZM/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download Spanish CV
            </a>
          </div>
        </article>
        <article className="tech_container">
          <h3 className="tech_title title">Technical Skills</h3>
          <ul className="tech_list">
            <li className="tech_item">
              <img className="tech_icon" src={html5} alt="HTML5 Icon" />
            </li>
            <li className="tech_item">
              <img className="tech_icon" src={css3} alt="CSS3 Icon" />
            </li>
            <li className="tech_item">
              <img className="tech_icon" src={sass} alt="Sass Icon" />
            </li>
            <li className="tech_item">
              <img className="tech_icon" src={js} alt="JavaScript Icon" />
            </li>
            <li className="tech_item">
              <img className="tech_icon" src={react} alt="React Icon" />
            </li>
            <li className="tech_item">
              <img className="tech_icon" src={gulp} alt="Gulp Icon" />
            </li>
            <li className="tech_item">
              <img className="tech_icon" src={npm} alt="Npm Icon" />
            </li>
            <li className="tech_item">
              <img className="tech_icon" src={zeplin} alt="Zeplin Icon" />
            </li>
            <li className="tech_item">
              <img className="tech_icon" src={git} alt="Git Icon" />
            </li>
            <li className="tech_item">
              <img className="tech_icon" src={github} alt="Github Icon/" />
            </li>
            <li className="tech_item">
              <img className="tech_icon" src={vscode} alt="VS Code Icon" />
            </li>
            <li className="tech_item">
              <img className="tech_icon" src={scrum} alt="Scrum Icon" />
            </li>
          </ul>
        </article>
      </section>
      <section id="projects" className="projects">
        <h2 className="projects_mainTitle title">Projects</h2>
        <ul className="projects_listContainer">
          <ProjectItem
            id="1"
            titles="JavaS the hutt"
            link="https://react-machines.herokuapp.com/"
            image={p1}
            desc="Code refactoring from JavaScript to React. Design and database
            creation"
            linkGH="https://github.com/Adalab/project-promo-n-module-3-team-3"
          />
          <ProjectItem
            id="2"
            titles="Rick &amp; Morty's WIKI"
            link="http://beta.adalab.es/modulo-3-evaluacion-final-JuditAldeguer/"
            image={p2}
            desc="Web application with React through an API requests, SPAs and
            filters by character"
            linkGH="https://github.com/Adalab/modulo-3-evaluacion-final-JuditAldeguer"
          />
          <ProjectItem
            id="3"
            titles="Awesome profile-cards"
            link="http://beta.adalab.es/project-promo-n-module-2-team-3/"
            image={p3}
            desc="Responsive web application to design, create and generate a
            business card to share"
            linkGH="https://github.com/Adalab/project-promo-n-module-2-team-3"
          />
          <ProjectItem
            id="4"
            titles="TV Shows Browser"
            link="http://beta.adalab.es/modulo-2-evaluacion-final-JuditAldeguer/"
            image={p4}
            desc="TV show API browser to add your favourites and save them in
            the local storage. Web application developed with JavaScript"
            linkGH="https://github.com/Adalab/modulo-2-evaluacion-final-JuditAldeguer"
          />
          <ProjectItem
            id="5"
            titles="Las 4Fantásticas"
            link="http://beta.adalab.es/project-promo-n-module-1-team-6/"
            image={p5}
            desc="Responsive contact web application developed with HTML5 &amp;
            CSS3"
            linkGH="https://github.com/Adalab/project-promo-n-module-1-team-6"
          />
          <ProjectItem
            id="6"
            titles="Anonymous Proxy"
            link="http://beta.adalab.es/modulo-1-evaluacion-final-JuditAldeguer/"
            image={p6}
            desc="Responsive contact web application developed with HTML5 &amp;
            CSS3"
            linkGH="https://github.com/Adalab/modulo-1-evaluacion-final-JuditAldeguer"
          />
          <ProjectItem
            id="7"
            titles="Clubs"
            link="http://beta.adalab.es/modulo-3-evaluacion-intermedia-JuditAldeguer/"
            image={p7}
            desc="Web application with React to add your favourites clubs and save them in
            the local storage."
            linkGH="https://github.com/Adalab/modulo-3-evaluacion-intermedia-JuditAldeguer"
          />
        </ul>
      </section>
    </main>
  );
};

export default Main;
