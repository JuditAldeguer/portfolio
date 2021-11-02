//Styless
import '../../styles/components/links.scss';
//i18
import React from 'react';
import { useTranslation } from 'react-i18next';
//Components
import Link from './Link';

const Links = (props) => {
  const [t, i18n] = useTranslation('cover');

  return (
    <nav className="nav">
      <ul className="navList">
        <li>
          <div>
            <button
              onClick={i18n.changeLanguage('es')}
              className="button button_es"
            >
              ES
            </button>
            <button onClick={i18n.changeLanguage('en')} className="button">
              EN
            </button>
          </div>
        </li>
        <li className="navItem">
          <a className="nav_link" href={`#${props.link}`} title={props.link}>
            {t(`nav.about`)}
          </a>
          {/* <Link link="aboutMe">about</Link> */}
        </li>
        <li className="navItem">
          <Link link="projects"> projects</Link>
        </li>
        <li className="navItem">
          <Link link="contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
