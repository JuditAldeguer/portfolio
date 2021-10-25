// //Styles
// import '../styles/layout/header.scss';
// //Components
// import Links from './secondary-components/Links';

const ProjectItem = (props) => {
  return (
    <li class="projects_listItem" id={props.id}>
      <article class="projects_listItem">
        <h3 class="item_title">{props.titles}</h3>
        <div class="img_container">
          <a
            href={props.link}
            alt={props.titles}
            target="_blank"
            rel="noreferrer"
            class="link"
          >
            <img class="item_img" src={props.image} alt="project" />
          </a>
        </div>
        <div class="item_links"></div>
        <div class="item_textContainer">
          <p class="item_description">{props.desc}</p>
          <a
            href={props.linkGH}
            alt={props.titles}
            target="_blank"
            rel="noreferrer"
            class="link"
          >
            <i class="fab fa-github fa-lg projectIcon" aria-hidden="true"></i>
          </a>
        </div>
      </article>
    </li>
  );
};

export default ProjectItem;
