//Styless
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
        <div class="coverText">
          <h1 class="cover_mainTitle">Judit Aldeguer Vicens</h1>
          <h2 class="cover_title">&lt;Junior Frontend Developer&gt;</h2>
          <p class="cover_text">Welcome to my portfolio!</p>
        </div>
      </section>
    </header>
  );
};

export default Header;
