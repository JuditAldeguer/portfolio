const Link = (props) => {
  return (
    <a className="nav_link" href={`#${props.link}`} title={props.link}>
      {props.children}
    </a>
  );
};

export default Link;
