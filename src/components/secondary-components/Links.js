import { NavLink } from 'react-router-dom';
//Styless
import '../../styles/components/links.scss';
//Components
import Navlinks from './Navlinks';

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
          <Navlinks link="#aboutMe" classtext="nav_link">
            About Me
          </Navlinks>
        </li>
        <li className="navItem">
          <Navlinks link="#projects" classtext="nav_link">
            Projects
          </Navlinks>
        </li>
        <li className="navItem">
          <Navlinks link="#contact" classtext="nav_link">
            Contact
          </Navlinks>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
