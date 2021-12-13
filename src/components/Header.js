//Styles
import '../styles/layout/header.scss';
//i18
import { useTranslation } from 'react-i18next';
//Components
import Links from './secondary-components/Links';

const Header = (props) => {
  const [t, i18n] = useTranslation('cover');
  return (
    <header id="header" className="header">
      <section className="header">
        <div className="cover">
          <Links />
        </div>
        <div className="coverText">
          <div>
            <h1 className="cover_mainTitle">Judit Aldeguer Vicensss</h1>
            <h2 className="cover_title">{t('cover.job')}</h2>
            <p className="cover_text">{t('cover.typewriter')}</p>
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
