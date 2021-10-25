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
      </section>
    </header>
  );
};

export default Header;
