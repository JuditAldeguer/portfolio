//Styles
import '../styles/layout/main.scss';
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
              <img
                class="tech_icon"
                src="../images/html5.87d71701.svg"
                alt="HTML5 Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="../images//css3.e87d85be.svg"
                alt="CSS3 Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="../images//sass.7b9e84a2.svg"
                alt="Sass Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="../images//js.e51818a4.svg"
                alt="JavaScript Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="../images//react.4e0c4c03.svg"
                alt="React Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="../images//gulp.ed96a48b.svg"
                alt="Gulp Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="../images//npm.c7b31f60.svg"
                alt="Npm Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="../images/zeplin.png"
                alt="Zeplin Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="../images//git.fd54052d.svg"
                alt="Git Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="../images//github.bfe22a7c.svg"
                alt="Github Icon/"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="../images//code.84b3047a.svg"
                alt="VS Code Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="../images//scrum.9a0e9f3b.png"
                alt="Scrum Icon"
              />
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
};

export default Main;
