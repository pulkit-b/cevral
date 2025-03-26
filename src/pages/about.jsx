import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const About = () => {
  return (
    <Layouts>
      <PageBanner
        pageName={"About us"}
        pageTitle={"Innovate. Transform. Thrive."}
      />
      {/* call to action */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-6">
              <h4 className="mil-mb-60">
                Unlock Your Business Potential:{" "}
                <span className="mil-accent">Connect with Our Experts</span>,
                for Tailored Solutions and Strategic Insights.
              </h4>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="mil-adaptive-right">
                <a
                  href="#."
                  className="mil-button mil-border mil-mr-15 mil-mb-30"
                >
                  <span>Talk To an Expert</span>
                </a>
                <a href="#." className="mil-button-with-label mil-mb-60">
                  <div className="mil-button mil-border mil-icon-button">
                    <span>
                      <i className="fas fa-play" />
                    </span>
                  </div>
                  <span className="mil-dark">Watch Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      {/* about */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "35%" }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="img/about/firm.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Firm Overview
              </span>
              <h2 className="mil-mb-50">
                We specialize in <br />
                <span className="mil-accent">
                  reshaping your ideas and
                </span>{" "}
                businesses to thrive in
                <br /> today's digital landscape.
              </h2>
              <p className="mil-mb-50">
                At cevral, we blend creativity and technology to bring your
                ideas to life in the digital age. With our expertise, your
                concepts thrive, ensuring your success in the ever-changing tech
                landscape. Join us in shaping the future!.{" "}
              </p>
              <div className="row align-items-end">
                <div className="col-xl-7">
                  <ul className="mil-check-icon-list mil-mb-60">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Architecting Visions.</span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Building Success.</span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Cultivating Innovation.</span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Delivering Excellence.</span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-5">
                  <Link href="team-single" className="mil-post-sm mil-mb-60">
                    <div className="mil-cover-frame">
                      <img src="img/faces/1.jpg" alt="cover" />
                    </div>
                    <div className="mil-description">
                      <h4 className="mil-font-3 mil-accent">Pulkit Batheja</h4>
                      <p className="mil-text-sm">Director & Co-Founder</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      {/* counters */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "25%" }} />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="mil-h1">
                4<span className="mil-accent">+</span>
              </div>
              <h6 className="mil-mb-60">Years Experience</h6>
              <h2 className="mil-mb-60">
                Running IT Services: Because Making Your Tech Less Spooky is Our
                Superpower!
              </h2>
            </div>
            <div className="col-lg-6">
              <h3 className="mil-mb-60">
                Supercharge your <span className="mil-accent">Innovation</span>{" "}
                with global tech talent. We'll connect you with a dedicated{" "}
                <span className="mil-accent">Remote Technology</span> team,
                customized for your unique requirements.{" "}
              </h3>
              <div className="row">
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">4+</span>&nbsp; Software
                    Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">3+</span>&nbsp; Years Client
                    Engagement
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">3+</span>&nbsp; App Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">10+</span>&nbsp; Web
                    Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* partners */}
      {/* <div className="mil-partners mil-p-120-90">
        <div className="container">
          <div className="mil-partners-frame">
            <a href="#.">
              <img src="img/partners/1.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/2.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/3.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/4.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/5.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/6.png" alt="partner" />
            </a>
          </div>
        </div>
      </div> */}
      {/* partners end */}
      {/* about */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="img/about/mission.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                IT Enterprise
              </span>
              <h2 className="mil-mb-50">Our Mission</h2>
              <p className="mil-mb-50">
                Empowering businesses with innovative solutions and unwavering
                support, our mission is to foster growth, inspire change, and
                create lasting value. We are dedicated to driving technological
                excellence, fostering meaningful connections, and shaping a
                future where businesses thrive and communities prosper.
              </p>
              <ul className="mil-simple-list">
                <li>Catalyzing Innovation.</li>
                <li>Elevating Tech Expertise.</li>
                <li>Revolutionizing Your Solutions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      {/* features */}
      <section className="mil-p-120-120">
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            Discover Our Company
          </span>
          <h2 className="mil-mb-120">Why Work With Us</h2>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/6.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Top Expertise</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Our team comprises industry-leading experts, bringing
                  unmatched knowledge and skills to the table. With a wealth of
                  experience, we tackle complex challenges with precision,
                  ensuring unparalleled solutions for your business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Quality Management</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  We uphold the highest standards of quality in every aspect of
                  our services. From meticulous planning to rigorous testing,
                  our quality management processes guarantee flawless execution,
                  delivering results that exceed expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/2.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Utmost Flexibility</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Recognizing the uniqueness of each project, we offer utmost
                  flexibility. Our adaptable approach allows us to tailor our
                  services to your specific requirements, ensuring a seamless
                  fit for your business goals and evolving needs.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/4.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Agility</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  In a fast-paced digital landscape, adaptability is key. We
                  pride ourselves on our agility, swiftly responding to changes
                  and market dynamics. This agility empowers us to adjust
                  strategies, implement innovations, and deliver timely
                  solutions, keeping your business one step ahead.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Innovation</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Innovation is the cornerstone of our ethos. We embrace
                  creativity and cutting-edge technologies, driving continuous
                  improvement in our services. By fostering an innovative
                  culture, we bring fresh ideas and inventive solutions to the
                  table, propelling your business into the future.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
        </div>
      </section>
      {/* features end */}
      {/* features */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "25%" }} />
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            For Enterprise
          </span>
          <h2 className="mil-mb-120">
            We Uphold<span className="mil-accent">Strong</span>Core Values.
          </h2>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Are</h4>
                  <p className="mil-box-text">
                    A dedicated team, united by a passion for innovation and
                    excellence, committed to transforming ideas into impactful
                    solutions. Together, we embody the spirit of collaboration
                    and drive to create a difference in every project we
                    undertake.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Deep Dive</h4>
                  <p className="mil-box-text">
                    Exploring the depths of challenges, we unravel complexities,
                    seeking insights that lead to transformative solutions. Our
                    in-depth analysis ensures a comprehensive understanding,
                    enabling us to craft strategies that go beyond surface
                    solutions, delivering lasting results.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Take</h4>
                  <p className="mil-box-text">
                    We take accountability for every task, ensuring meticulous
                    attention to detail and unwavering commitment to quality.
                    Taking challenges head-on, we turn obstacles into
                    opportunities, embracing each project as a chance to
                    showcase our expertise and dedication.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Value</h4>
                  <p className="mil-box-text">
                    At our core, we value integrity, transparency, and the trust
                    bestowed upon us by our clients. We prioritize client
                    satisfaction, valuing their goals as our own and working
                    tirelessly to exceed their expectations. Our commitment to
                    value-driven services defines our professional ethos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Believe</h4>
                  <p className="mil-box-text">
                    We believe in the power of innovation, the impact of
                    collaboration, and the potential within every idea. With
                    this belief, we nurture creativity, foster teamwork, and
                    advocate for forward-thinking solutions, guiding our clients
                    towards success and sustainable growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Say “We”</h4>
                  <p className="mil-box-text">
                    Emphasizing the strength of unity, we proudly use "we" to
                    signify our collective effort. Together, as a cohesive team,
                    we achieve milestones, overcome challenges, and celebrate
                    victories, reinforcing the collaborative spirit that defines
                    our company culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features end */}
      {/* contact */}
      {/* contact */}
      <ContactForm />
    </Layouts>
  );
};
export default About;
