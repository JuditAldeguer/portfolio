// //Styles
// import '../styles/layout/header.scss';
// //Components
// import Links from './secondary-components/Links';

const ProjectItem = (props) => {
  return (
    <li className="projects_listItem" id={props.id}>
      <article className="projects_listItem">
        <h3 className="item_title">{props.titles}</h3>
        <div className="img_container">
          <a
            href={props.link}
            alt={props.titles}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <img className="item_img" src={props.image} alt="project" />
          </a>
        </div>
        <div className="item_links"></div>
        <div className="item_textContainer">
          <p className="item_description">{props.desc}</p>
          <a
            href={props.linkGH}
            alt={props.titles}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <i
              className="fab fa-github fa-lg projectIcon"
              aria-hidden="true"
            ></i>
          </a>
        </div>
      </article>
    </li>
  );
};

export default ProjectItem;
