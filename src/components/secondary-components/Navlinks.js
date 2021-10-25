import { NavLink } from 'react-router-dom';

const Navlinks = (props) => {
  return (
    <NavLink
      to={props.link}
      title={props.link}
      className={props.classname}
      activeClassName="selected-link"
    >
      {props.children}
    </NavLink>
  );
};

export default Navlinks;
