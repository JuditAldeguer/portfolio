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
                src="./static/media/html5.87d71701.svg"
                alt="HTML5 Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="./static/media/css3.e87d85be.svg"
                alt="CSS3 Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="./static/media/sass.7b9e84a2.svg"
                alt="Sass Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="./static/media/js.e51818a4.svg"
                alt="JavaScript Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="./static/media/react.4e0c4c03.svg"
                alt="React Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="./static/media/gulp.ed96a48b.svg"
                alt="Gulp Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="./static/media/npm.c7b31f60.svg"
                alt="Npm Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEEElEQVRoge3YW4xdUxgH8F8pOi2mM6SduqRGUiVSVIJIKmEe6EgqEQlxjUfUJcWTF5cHL64vgjYSKhUkHnghLiEuwcRdpVO3CK12lLZz6YVBPXx7O3v22fvMmZ6emTY5/+TLPmfttfb6r/V967ssWmihhRZaaKEaF6MPf2JPRrbgSRwzddTGx4X411jieRnBPTh0ijj+j2kFbX04q87x3+BmvJP8PxGLcRIW4nh0YQ6mYzZ2Y1sif+CLZM4+fCc2qCFkzaYj964Ha1Vr5EP8VtA+UfkWd+G4RhaQ/WARFqrsVLPkHzyNeeORLTKhPQXvp+ES3CK0UDSOMImvsR79WCcO/nYMYRgHCc12iJ0+O5Hz0J773rA4a48o39DCBWQ10CvstGinBvEybsNpNRZWD2bgSrxeMM+zJuAwsgNfKvjY33g1maytAcK1cAG+ys37dr3zldnlTjyEY/c930JMVzGdVJ7PdxrvDKT/V+E+bMx8fD66RVCblzznCNtuFy6zXZgGzFIxgxGM4i9xRn7HZvwkHES/MNuduAMPZvhcgzVlCzhfqCrFFtyeTHAOzhReqFvzg9goPk/49KjEpl+wQLj7MZiFDcaqbKvxo/JUyBUp6emZBdyg2r7zgSyLDfgx2ZGB5P+AiLCDwnUOCjOQPNNdOyKZuw1HC9PrEju7QHi0U4TLLcKleCHf2Fey2hG8i4dxFc4Q2mo2ZovY84yIIVlO3xcNyHYaxuO4CIdNAtnxcBSeMNYjolxF+xvqCpAfKzahHXhPxYQW4/Cm0ByLDmFCq4VFFJpQ9hC/KHKSPGZiSSJZbMIPIjZsSp6bVR/ikaT/buxKfrcL7c8Sh3huIgtEKr4IJyvf+U+KGg8kN3p5SvrgzAJG8Smuz7SN4EasFGobTNqPzI1tBkbFTq8RjiR18T9juUi5604lnsK9QkME+fk4IflwV/Kcq5JCpDIzGTNDJRkbSgjsFlF+i4ghaSqxDl8Kk7sTD2T4XI3naq28TG27xEGezGTu0RyHmsRTZAeUpdOvCY/UrHS6R3U6/Va982UHwVLlBc0QXsEKnK6xuNImNuWNgnlWK0keJ1JSLsOtapeUW8XOrU8kLSm3qS4pO40tKZeoLil34m5Rh+TPZinyGshjMor6UVHUd9dLOovstUpn7l2zr1VSuW5viKcoy0qLZK0oglJclnv/gUhR+kWU3iVc54C4A3pTeJrHMmO2a9A59Bo/+g6JSu2Q3Nhpwu7TfsvrnHNVZszKRsin6MVH9u5y96ZM/19FKlwLi3LznNsI8X2BNlGppYTWidvufAbbiWuFOaV93588mrWxVAS8iRzcrTh1KsiWYZlIBushv1HUwfsd5uJ+fKa6KNkhrk1WqCR8LbTQQgsHGP4DtVYtynBpwhsAAAAASUVORK5CYII="
                alt="Zeplin Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="./static/media/git.fd54052d.svg"
                alt="Git Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="./static/media/github.bfe22a7c.svg"
                alt="Github Icon/"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="./static/media/code.84b3047a.svg"
                alt="VS Code Icon"
              />
            </li>
            <li class="tech_item">
              <img
                class="tech_icon"
                src="./static/media/scrum.9a0e9f3b.png"
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
