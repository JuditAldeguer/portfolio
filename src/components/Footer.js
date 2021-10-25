import '../styles/layout/footer.scss';

const Footer = (props) => {
  return (
    <footer id="contact" className="footer">
      <div className="footer_container">
        <div className="footer_contact">
          <div className="footer_text">
            <h2 className="footer_text1">Contact</h2>
            <div className="talk_container">
              <p className="footer_text2">Let´s</p>
              <ul className="talk_list">
                <li>talk!</li>
                <li>
                  <i
                    className="fas fa-phone-alt icon_phone"
                    aria-hidden="true"
                  ></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerCover">
            <div className="footer_rrss">
              <ul className="rrss_list">
                <li className="footerList_item">
                  <a
                    href="https://www.linkedin.com/in/juditaldeguer/"
                    alt="Linkedin profile"
                    target="_blank"
                    rel="noreferrer"
                    className="rrss_link"
                  >
                    <i
                      className="fab fa-linkedin fa-lg icon"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li className="footerList_item">
                  <a
                    href="https://github.com/JuditAldeguer"
                    alt="Github profile"
                    target="_blank"
                    rel="noreferrer"
                    className="rrss_link"
                  >
                    <i
                      className="fab fa-github fa-lg icon"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li className="footerList_item">
                  <a
                    href="mailto:jud.vicens@hotmail.es"
                    alt="Email contact"
                    target="_blank"
                    rel="noreferrer"
                    className="rrss_link"
                  >
                    <i
                      className="fas fa-envelope-square fa-lg icon"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_arrowCopy">
          <div classname="footer_arrow">
            <a href="#header">
              <i
                className="fas fa-arrow-alt-circle-up arrowIcon"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div className="footer_copy">
            <p className="copy">
              © 2021 · Developed by Judit Aldeguer Vicens ·
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
