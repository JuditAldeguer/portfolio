import '../styles/layout/footer.scss';

const Footer = (props) => {
  return (
    <footer id="contact" className="footer">
      <div class="footer_container">
        <div class="footer_contact">
          <div class="footer_text">
            <h2 class="footer_text1">Contact</h2>
            <div class="talk_container">
              <p class="footer_text2">Let´s</p>
              <ul class="talk_list">
                <li>talk!</li>
                <li>
                  <i class="fas fa-phone-alt icon_phone" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="footerCover">
            <div class="footer_rrss">
              <ul class="rrss_list">
                <li class="footerList_item">
                  <a
                    href="https://www.linkedin.com/in/juditaldeguer/"
                    alt="Linkedin profile"
                    target="_blank"
                    class="rrss_link"
                  >
                    <i
                      class="fab fa-linkedin fa-lg icon"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li class="footerList_item">
                  <a
                    href="https://github.com/JuditAldeguer"
                    alt="Github profile"
                    target="_blank"
                    class="rrss_link"
                  >
                    <i class="fab fa-github fa-lg icon" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="footerList_item">
                  <a
                    href="mailto:jud.vicens@hotmail.es"
                    alt="Email contact"
                    target="_blank"
                    class="rrss_link"
                  >
                    <i
                      class="fas fa-envelope-square fa-lg icon"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer_arrowCopy">
          <div classname="footer_arrow">
            <a href="#header">
              <i
                class="fas fa-arrow-alt-circle-up arrowIcon"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div class="footer_copy">
            <p class="copy">© 2021 · Developed by Judit Aldeguer Vicens ·</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
