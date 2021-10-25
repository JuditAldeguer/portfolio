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
            <button class="button button_es">ES</button>
            <button class="button">EN</button>
          </div>
        </li>
        <li className="navItem">
          <Navlinks link="#aboutMe" classname="nav_link">
            About Me
          </Navlinks>
        </li>
        <li className="navItem">
          <Navlinks link="#projects" classname="nav_link">
            Projects
          </Navlinks>
        </li>
        <li className="navItem">
          <Navlinks link="#contact" classname="nav_link">
            Contact
          </Navlinks>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
