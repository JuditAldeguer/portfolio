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
          <Link link="aboutMe" classtext="nav_link">
            About Me
          </Link>
        </li>
        <li className="navItem">
          <Link link="projects" classtext="nav_link">
            Projects
          </Link>
        </li>
        <li className="navItem">
          <Link link="contact" classtext="nav_link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
