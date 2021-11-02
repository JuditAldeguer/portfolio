//Styles
import '../styles/layout/main.scss';
//i18
import { useTranslation } from 'react-i18next';
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
import p8 from '../images/p8.png';
import p9 from '../images/p9.png';

//Components
import ProjectItem from './secondary-components/ProjectItem';

const Main = (props) => {
  const [t, i18n] = useTranslation('cover');
  return (
    <main>
      <section id="aboutMe" className="aboutMe">
        <article className="about_container">
          <h2 className="about_mainTitle title">{t('about.title')}</h2>
          <p className="about_text">{t('about.description1')}</p>
          <p className="about_text">{t('about.description2')}</p>
          <p className="about_text">{t('about.description3')}</p>
          <div className="div_download">
            <a
              className="link_download"
              href="https://drive.google.com/file/d/1KOCH1zDOpmJZDOBgVosi_BuWFd0QrhfF/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {t('about.download1')}
            </a>
            <a
              className="link_download"
              href="https://drive.google.com/file/d/1BCwVeIoUrcUGavLogughw3Z3h9Jqf-ZM/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {t('about.download2')}
            </a>
          </div>
        </article>
        <article className="tech_container">
          <h3 className="tech_title title">{t('about.techTitle')}</h3>
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
          <div id="projects" />
        </article>
      </section>
      <section className="projects">
        <h2 className="projects_mainTitle title">{t('about.project')}</h2>
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
            link="https://juditaldeguer.github.io/modulo-3-evaluacion-final-JuditAldeguer/"
            image={p2}
            desc="Web application with React through an API requests, SPAs and
            filters by character"
            linkGH="https://github.com/JuditAldeguer/modulo-3-evaluacion-final-JuditAldeguer"
          />
          <ProjectItem
            id="3"
            titles="Awesome profile-cards"
            link="http://beta.adalab.es/project-promo-n-module-2-team-3/"
            image={p3}
            desc="Responsive web application made with Java Script, to design, create and generate a business card to share"
            linkGH="https://github.com/Adalab/project-promo-n-module-2-team-3"
          />
          <ProjectItem
            id="4"
            titles="TV Shows Browser"
            link="http://juditaldeguer.github.io/modulo-2-evaluacion-final-JuditAldeguer/"
            image={p4}
            desc="TV show API browser to add your favourites and save them in
            the local storage. Web application developed with JavaScript"
            linkGH="https://github.com/JuditAldeguer/modulo-2-evaluacion-final-JuditAldeguer"
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
            id="9"
            titles="Hangman Game"
            link="https://juditaldeguer.github.io/hangman-game/"
            image={p9}
            desc="Web application with React that allows you to play the famous Hangman Game and has a multiplayer / individual option"
            linkGH="https://github.com/JuditAldeguer/hangman-game"
          />
          <ProjectItem
            id="7"
            titles="Clubs"
            link="http://juditaldeguer.github.io/modulo-3-evaluacion-intermedia-JuditAldeguer/"
            image={p7}
            desc="Web application with React to add your favourites clubs and save them in
            the local storage."
            linkGH="https://github.com/JuditAldeguer/modulo-3-evaluacion-intermedia-JuditAldeguer"
          />
          <ProjectItem
            id="8"
            titles="Adivina el número"
            link="https://juditaldeguer.github.io/modulo-2-evaluacion-intermedia-JuditAldeguer/"
            image={p8}
            desc="Web application made with Java Script to play guessing the number chosen at random by the computer."
            linkGH="https://github.com/JuditAldeguer/modulo-2-evaluacion-intermedia-JuditAldeguer"
          />
          <ProjectItem
            id="6"
            titles="Anonymous Proxy"
            link="http://juditaldeguer.github.io/modulo-1-evaluacion-final-JuditAldeguer/"
            image={p6}
            desc="Responsive web developed with HTML5 &amp;
            CSS3"
            linkGH="https://github.com/JuditAldeguer/modulo-1-evaluacion-final-JuditAldeguer"
          />
        </ul>
      </section>
    </main>
  );
};

export default Main;
