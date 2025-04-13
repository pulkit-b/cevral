import { useRouter } from "next/router";
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
// import industries from "./content";

const Products = () => {
    const { query } = useRouter();
  const { slug } = query;

//   const industry = industries[slug];

//   if (!industry) return <Layout><div className="container py-5">Service not found.</div></Layout>;

  return (
    <Layout footer={3}>
      <Breadcumb pageName={"AVI - Analytical Visual Interface"} />
      <div className="ceo-cod-area product">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title">
                <h2> AVI – AI Dashboards On Your Terms</h2>
                <h2>
                  {" "}
                  <span>  </span>
                </h2>
                <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>
                <p className="about-text white">
                  {" "}
                  Your Data, Your Dashboards, No Compromises.{" "}
                </p>
                <p className="about-text2">
                AVI (Analytical Visual Interface) is an AI-powered on-premise solution that transforms your data into dynamic dashboards and insightful reports—all within your own infrastructure. Built with privacy and control at its core, AVI ensures your data never leaves your environment, eliminating security concerns tied to cloud-based tools. As the evolution of our upcoming first product, AVI takes a bold step toward smarter, faster, and more secure data visualization—completely on your terms.{" "}
                </p>
              </div>
              {/* <div className="dreamit-ceo-title">
                <h4> Philip Antrophy </h4>
                <span>SEO &amp; Founder</span>
              </div> */}
              <div className="about-button">
                <Link legacyBehavior href="/testimonial">
                  <a>
                    {" "}
                    Coming Soon 
                    <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb1">
                <img src="/assets/images/about/avi.png" alt />
              </div>
              {/* <div className="about-shape-box">
                <div className="about-shape-thumb bounce-animate">
                  <img src="/assets/images/about/ab-shape.png" alt />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      </Layout>
  )
}

export default Products;
