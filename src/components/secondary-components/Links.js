//Styless
import '../../styles/components/links.scss';
//i18
import { useTranslation } from 'react-i18next';
//Components
import Link from './Link';

const Links = (props) => {
  const [t, i18n] = useTranslation('nav');

  return (
    <nav className="nav">
      <ul className="navList">
        <li>
          <div>
            <button
              onClick={() => i18n.changeLanguage('es')}
              className="button button_es"
            >
              ES
            </button>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className="button"
            >
              EN
            </button>
          </div>
        </li>
        <li className="navItem">
          <Link link="aboutMe">about</Link>
        </li>
        <li className="navItem">
          <Link link="projects">projects</Link>
        </li>
        <li className="navItem">
          <Link link="contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
