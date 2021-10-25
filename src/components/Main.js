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
// //Components
// import Links from './secondary-components/Links';

const Main = (props) => {
  return (
    <main>
      <section id="aboutMe" class="aboutMe">
        <article>
          <h2 class="about_mainTitle">About Me</h2>
          <p class="about_text">
            I am a Junior Frontend Developer who discovered programming thanks
            to my surroundings, and fell in love with the community, the
            creativity and the possibility of making an impact on society. My
            previous work experiences have made me a very adaptable person who
            enjoys continuous learning.
          </p>
          <p class="about_text">
            My hobbies include taking care of my people, nature, sports and
            traveling.
          </p>
          <p class="about_text">
            I consider myself a hard-working and fast-learner person, who enjoys
            challenges..
          </p>
        </article>
        <article class="tech_container">
          <h3 class="tech_title">Technical Skills</h3>
          <ul class="tech_list">
            <li class="tech_item">
              <img class="tech_icon" src={html5} alt="HTML5 Icon" />
            </li>
            <li class="tech_item">
              <img class="tech_icon" src={css3} alt="CSS3 Icon" />
            </li>
            <li class="tech_item">
              <img class="tech_icon" src={sass} alt="Sass Icon" />
            </li>
            <li class="tech_item">
              <img class="tech_icon" src={js} alt="JavaScript Icon" />
            </li>
            <li class="tech_item">
              <img class="tech_icon" src={react} alt="React Icon" />
            </li>
            <li class="tech_item">
              <img class="tech_icon" src={gulp} alt="Gulp Icon" />
            </li>
            <li class="tech_item">
              <img class="tech_icon" src={npm} alt="Npm Icon" />
            </li>
            <li class="tech_item">
              <img class="tech_icon" src={zeplin} alt="Zeplin Icon" />
            </li>
            <li class="tech_item">
              <img class="tech_icon" src={git} alt="Git Icon" />
            </li>
            <li class="tech_item">
              <img class="tech_icon" src={github} alt="Github Icon/" />
            </li>
            <li class="tech_item">
              <img class="tech_icon" src={vscode} alt="VS Code Icon" />
            </li>
            <li class="tech_item">
              <img class="tech_icon" src={scrum} alt="Scrum Icon" />
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
};

export default Main;
