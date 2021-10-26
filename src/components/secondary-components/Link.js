import { NavLink } from 'react-router-dom';

const Link = (props) => {
  return (
    // <NavLink
    //   to={props.link}
    //   title={props.link}
    //   className={props.classtext}
    //   activeClassName="selected-link"
    // >
    //   {props.children}
    // </NavLink>
    <a
      href={`#${props.link}`}
      title={props.link}
      className={props.classtext}
      activeClassName="selected-link"
    >
      {props.children}
    </a>
  );
};

export default Link;
