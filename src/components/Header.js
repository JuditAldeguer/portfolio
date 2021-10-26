//Styles
import '../styles/layout/header.scss';
//Components
import Links from './secondary-components/Links';

const Header = (props) => {
  return (
    <header className="header">
      <section id="header" className="header">
        <div className="cover">
          <Links />
        </div>
        <div className="coverText">
          <h1 className="cover_mainTitle">Judit Aldeguer Vicens</h1>
          <h2 className="cover_title">Junior Frontend Developer</h2>
          <p className="cover_text">Get to know more about me!</p>
        </div>
      </section>
    </header>
  );
};

export default Header;
