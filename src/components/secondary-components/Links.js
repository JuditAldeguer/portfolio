//Styless
import '../../styles/components/links.scss';
//Components
import Link from './Link';

const Links = (props) => {
  return (
    <nav className="nav">
      <ul className="navList">
        <li>
          <div>
            <button className="button button_es">ES</button>
            <button className="button">EN</button>
          </div>
        </li>
        <li className="navItem">
          <Link link="aboutMe">About Me</Link>
        </li>
        <li className="navItem">
          <Link link="projects">Projects</Link>
        </li>
        <li className="navItem">
          <Link link="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
