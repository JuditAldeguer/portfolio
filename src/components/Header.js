//Styles
import '../styles/layout/header.scss';
//Components
import Links from './secondary-components/Links';

const Header = (props) => {
  return (
    <header id="header" className="header">
      <section className="header">
        <div className="cover">
          <Links />
        </div>
        <div className="coverText">
          <div>
            <h1 className="cover_mainTitle">Judit Aldeguer Vicens</h1>
            <h2 className="cover_title">Junior Frontend Developer</h2>
            <p className="cover_text">Get to know more about me!</p>
          </div>
          <div
            className="badge-base LI-profile-badge linkedin_insignia"
            data-locale="es_ES"
            data-size="medium"
            data-theme="light"
            data-type="VERTICAL"
            data-vanity="juditaldeguer"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://es.linkedin.com/in/juditaldeguer?trk=profile-badge"
            >
              _
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
