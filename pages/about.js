import Breadcumb from "@/src/components/Breadcumb";
import Counter from "@/src/components/Counter";
import Faqs from "@/src/components/Faqs";
import LogoSlider from "@/src/components/LogoSlider";
import Layout from "@/src/layout/Layout";
import { testimonial_list_slider } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
const About = () => {
  return (
    <Layout footer={3}>
      <Breadcumb pageName={"About Us"} />
      {/* ========================================================= */}
      {/* Start abouts area  */}
      {/* ========================================================= */}
      <div className="abouts_areas">
        {/* <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="singles_abouts_boxs">
                <div className="abouts_thumb">
                  <img src="/assets/images/resource/abouts_1.png" alt />
                  <div className="about-inner-content">
                    <div className="abouts_titles">
                      <h3>
                        All in one web solution for your digital business{" "}
                      </h3>
                      <div className="abouts_icons">
                        <a href="#">
                          <i className="fas fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="singles_abouts_boxs">
                <div className="abouts_thumb">
                  <img src="/assets/images/resource/abouts_2.png" alt />
                  <div className="abouts_titles upper">
                    <h3>The top best digital agency in new road market usa </h3>
                    <div className="abouts_icons">
                      <a href="#">
                        <i className="fas fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/*=================================================*/}
      {/* START  feture-area Section */}
      {/*=================================================*/}
      <div className="feature-area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title">
                <h5> Features </h5>
                <h2>
                  {" "}
                  We specialize in <span>reshaping your ideas and businesses</span> to thrive in today's digital landscape. 
                </h2>
                <p className="about-text1">
                  {" "}
                  we help businesses modernize and thrive with the power of AI, cloud, and cutting-edge applications. Whether it’s app modernization, intelligent automation, or enterprise-scale solutions, we build technology that solves real problems and drives growth. With a focus on simplicity, security, and performance, we deliver solutions that fit your vision—and your infrastructure.{" "}
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Smart solutions designed to solve real-world challenges </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Creative tech that powers growth and agility </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Seamless systems built for scale and success </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              {/* Hero */}
              <Tab.Container defaultActiveKey={"t1"}>
                <div className="tab">
                  <Nav as="ul" className="tabs">
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={"t1"}>
                        Satisfaction
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={"t2"}>
                        Expertise
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={"t3"}>
                        Vision
                      </Nav.Link>
                    </li>
                  </Nav>{" "}
                  {/* / tabs */}
                  <Tab.Content className="tab_content">
                    <Tab.Pane eventKey={"t1"} className="tabs_item">
                      <img
                        src="/assets/images/resource/img-1.png"
                        alt="business image"
                      />
                      <ul className="tabs-inner-list">
                      <li>
  <i className="fas fa-check" />
  <span>Client-first approach always.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Transparent communication flow.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Solutions built around you.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Reliable post-launch support.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Timely and efficient delivery.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Long-term partnerships matter.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>High-quality work, every time.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Consistent positive feedback received.</span>
</li>
                      </ul>
                    </Tab.Pane>{" "}
                    {/* / tabs_item */}
                    <Tab.Pane eventKey={"t2"} className="tabs_item">
                      <img src="/assets/images/resource/img-2.png" alt="Image" />
                      <ul className="tabs-inner-list">
                      <li>
  <i className="fas fa-check" />
  <span>Strong AI and cloud team.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Deep enterprise application knowledge.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>End-to-end project ownership.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Skilled across tech stacks.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Agile and DevOps driven.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Proven modernization strategies.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Integration without disruption.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Experience across industries.</span>
</li>
                      </ul>
                    </Tab.Pane>{" "}
                    {/* / tabs_item */}
                    <Tab.Pane eventKey={"t3"} className="tabs_item">
                      <img src="/assets/images/resource/img-3.png" alt="Image" />
                      <ul className="tabs-inner-list">
                      <li>
  <i className="fas fa-check" />
  <span>Empower businesses through tech.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Make innovation accessible.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Build secure, smart systems.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Lead in AI transformation.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Drive value through simplicity.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Shape future-ready solutions.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Grow with integrity and purpose.</span>
</li>
<li>
  <i className="fas fa-check" />
  <span>Technology that truly serves.</span>
</li>
                      </ul>
                    </Tab.Pane>{" "}
                    {/* / tabs_item */}
                  </Tab.Content>{" "}
                  {/* / tab_content */}
                </div>
              </Tab.Container>
              {/* / tab */}
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area">
        <div className="container">
          <div className="row testi-rotate align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title white pb-50">
                <h5> For Enterprise </h5>
                <h2> The Cevral Way </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="row">
                {/* <div className="col-6">
                  <div className="testi-counter-box upper">
                    <div className="testi-counter-title">
                      <h3 className="counter"> 1,372   </h3>
                      <span>+</span>
                      <p> Happy Customers </p>
                    </div>
                  </div>
                </div> */}
                <div className="col-12">
                  <div className="testi-counter-box">
                    <div className="testi-counter-title">
                      <h3 className="counter"> 100 </h3>
                      <span>%</span>
                      <p> Satisfaction Rate </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-shape-thumb1 rotateme">
              <img src="/assets/images/resource/testimonial-map.png" alt />
            </div>
          </div>
          <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="single-service-box">
                          <div className="service-icon-thumb">
                            <img src="/assets/images/resource/srv3.png" alt />
                          </div>
                          <div className="service-content">
                            <h2>We Are</h2>
                            <p>
                            Driven by technology, focused on real impact.
                            </p>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-service-box">
                         
                          <div className="service-icon-thumb">
                            <img src="/assets/images/resource/srv3.png" alt />
                          </div>
                          <div className="service-content">
                            <h2>We Deep Dive</h2>
                            <p>
                            Understanding your challenges is where we start.
                            </p>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-service-box">
                          
                          <div className="service-icon-thumb">
                            <img src="/assets/images/resource/srv3.png" alt />
                          </div>
                          <div className="service-content">
                            <h2>We Take</h2>
                            <p>
                            Every project is personal to us—from planning to delivery and beyond.
                            </p>
                           
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-service-box">
                          
                          <div className="service-icon-thumb">
                            <img src="/assets/images/resource/srv3.png" alt />
                          </div>
                          <div className="service-content">
                            <h2>We Value</h2>
                            <p>
                            These aren't buzzwords—they're how we work.
                            </p>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-service-box">
                          
                          <div className="service-icon-thumb">
                            <img src="/assets/images/resource/srv3.png" alt />
                          </div>
                          <div className="service-content">
                            <h2>We Believe</h2>
                            <p>
                            Solutions should be simple, smart, and scalable.
                            </p>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-service-box">
                          
                          <div className="service-icon-thumb">
                            <img src="/assets/images/resource/srv3.png" alt />
                          </div>
                          <div className="service-content">
                            <h2>We Say "WE"</h2>
                            <p>
                            Clients, teams, and goals—moving forward as one unified force.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/*  Start  Counter Section */}
      {/*===================================================*/}
      <div className="counter-section style-33 pt-30 pb-10">
        <div className="container">
          <div className="counter-container">
          <div className="row align-items-center mb-10">
            <div className="col-lg-7 col-md-8">
              <div className="consen-section-title white mobile-center">
                <h2> Join the Cevral team </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/blog-grid">
                  <a>
                    {" "}
                    Careers@Cevral <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen Team Area */}
      {/*==================================================*/}
      <div className="team_area style-two" id="corporate-values">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="consen-section-title upper text-center pb-60">
                <h5> Our Values </h5>
                <h2>
                  {" "}
                  The Foundation Of <span> Cevral </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img src="/assets/images/resource/ab1.png" alt="image" />
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img src="/assets/images/resource/ab2.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img src="/assets/images/resource/ab3.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img src="/assets/images/resource/ab4.png" alt="image" />
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Team Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start  FAQ Section */}
      {/*===================================================*/}
      {/* <div className="faq-sectiions ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title white pb-1 mb-1">
                <h5> process </h5>
                <h2>
                  {" "}
                  Freequently Asked <span> Question </span>
                </h2>
                <p className="study-text1">
                  {" "}
                  Appropriately enhance principle-centered innovation rather
                  than high standards in platforms. Credibly orchestrate
                  functional.{" "}
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Communicate orthogonal process </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Professionally grow cutting-edge paradigms </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Communicate orthogonal process </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Professionally grow cutting-edge paradigms </span>
                  </li>
                </ul>
              </div>
              <div className="why-choose-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> More About{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-0">
              {/* Start Accordion
              <div className="tab_container pl-30 pt-20">
                <Faqs />
              </div>
              {/* End Accordion
            </div>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/*Start  Brand Section */}
      {/*===================================================*/}
      {/* <div className="brand-section">
        <div className="container">
          <div className="row">
            <LogoSlider />
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* Start consen Subscribe Area */}
      {/*==================================================*/}
      <div className="subscribe-area style-two mt-5 mt-sm-0">
        <div className="container">
          <div className="subscribe">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="subscribe-title">
                  <h1>Get your Free Business Consultation</h1>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <a href="tel:09837393403" className="subscribe-icon">
                  <i className="bi bi-telephone-inbound" />
                </a>
                <div className="subscribe-title2">
                  <h1> +91 86400-74511 </h1>
                  <p> sales@cevral.com </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Subscribe Area */}
      {/*==================================================*/}
    </Layout>
  );
};
export default About;
