const Footer3 = () => {
  return (
    <div className="footer-middle new-style">
      <div className="container">
        <div className="footer-bg">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="widget widgets-company-info mb-4 mb-lg-0">
                <div className="footer-new-logo">
                  <img src="/assets/images/logo-white.png" alt="" />
                </div>
                <div className="company-info-desc">
                  <p>
                  Where Innovation Meets Excellence. We're dedicated to empowering businesses through cutting-edge technology, tailored solutions, and unwavering commitment. Partner with us to unlock your full potential and thrive in the ever-evolving digital landscape.
                  </p>
                </div>
                <div className="follow-company-icon">
                  <a className="social-icon-color" href="#">
                    {" "}
                    <i className="bi bi-facebook" />{" "}
                  </a>
                  <a className="social-icon-color2" href="#">
                    {" "}
                    <i className="bi bi-instagram"> </i>{" "}
                  </a>
                  <a className="social-icon-color1" href="#">
                    {" "}
                    <i className="bi bi-twitter" />{" "}
                  </a>
                  <a className="social-icon-color3" href="#">
                    {" "}
                    <i className="bi bi-youtube" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="widget widget-nav-menu one">
                <h4 className="widget-title">Explore</h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu">
                    <li>
                      <a href="/about"> About Us </a>
                    </li>
                    <li>
                      <a href="/service"> Our Service</a>
                    </li>
                    <li>
                      <a href="/products/avi"> Portfolio </a>
                    </li>
                    <li>
                      <a href="/contact"> Contact Us </a>
                    </li>
                    <li>
                      <a href="/career"> Career </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title"> Userful Links </h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu">
                    <li>
                      <a href="/products/avi"> AVI (Analytical Visual Interface) </a>
                    </li>
                    <li>
                      <a href="/blog/generative-ai-for-real-work"> GEN AI </a>
                    </li>
                    <li>
                      <a href="/services/cevral-ai"> Cevral.AI </a>
                    </li>
                    <li>
                      <a href="/blog"> Blogs </a>
                    </li>
                    <li>
                      <a href="#"> Licence </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div id="em-recent-post-widget" className="mt-5 mt-sm-0">
                <div className="single-widget-item">
                  <h4 className="widget-title">Get In Touch</h4>
                </div>
                <div className="widget-location">
                  <h4>Contacts</h4>
                  <span>+91 86400-74511</span><br/>
                  <span>sales@cevral.com</span>
                </div>
                <div className="widget-location">
                  <h4>Locations</h4>
                  <span>704, 7F, Palm Court, MG Road, Gurugram, HR, India 122007</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area d-flex align-items-center">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-7">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy">
                  <p>Copyright © Cevral Technology Solutions India Private Limited all rights reserved.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="footer-bottom-menu">
                <ul>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy </a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer3;
