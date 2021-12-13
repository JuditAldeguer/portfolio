//i18
import { useTranslation } from 'react-i18next';
//HashLink
import { HashLink } from  'react-router-hash-link'; 

const Link = (props) => {
  const [t, i18n] = useTranslation('nav');
  return (
    <HashLink  className="nav_link" to={`#${props.link}`} title={props.link}>
    {t(`nav.${props.children}`)}
  </HashLink>
  );
};

export default Link;
