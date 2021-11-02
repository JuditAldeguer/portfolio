//i18
import { useTranslation } from 'react-i18next';

const Link = (props) => {
  const [t, i18n] = useTranslation('nav');
  return (
    <a className="nav_link" href={`#${props.link}`} title={props.link}>
      {t(`nav.${props.children}`)}
    </a>
  );
};

export default Link;
