import { useRouter } from "next/router";
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import serviceDetailsData from "@/content/services/content";

const ServiceDetails = () => {
  const { query } = useRouter();
  const { slug } = query;

  const service = serviceDetailsData[slug];

  if (!service) return <Layout><div className="container py-5">Service not found.</div></Layout>;


  return (
    <Layout footer={3}>
      <Breadcumb pageName={service.title} />
      {/*==================================================*/}
      {/* Start consen service details Area */}
      {/*==================================================*/}
      <div className="service-detials-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="consen-service-details-box">
                    <div className="consen-service-thumb">
                    <img src={service.bannerImage} alt={service.title} />
                    </div>
                    <div className="service-details-content">
                      <div className="service-page-title">
                        <h1> {service.title}</h1>
                      </div>
                      <div className="serivce-details-desc">
                      {service.description.map((para, i) => (
  <p
    key={i}
    className={i === service.description.length - 1 ? 'pb-30' : ''}
    dangerouslySetInnerHTML={{ __html: para }}
  />
))}
                      </div>
                    </div>
                  </div>
                </div>
                {service.highlights.map((item, i) => (
                  <div className="col-lg-6 col-sm-6" key={i}>
                    <div className="service-details-box">
                      {/* <div className="service-details-icon">
                        <img src={item.image} alt={item.title} />
                      </div> */}
                      <div className="service-details-title">
                        <h4>{item.title}</h4>
                      </div>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}

{service.subSections.map((section, index) => (
                <div className="col-lg-12">
                  <div className="service-details-content">
                    <div className="service-page-title2">
                      <h1>{section.heading}</h1>
                    </div>
                    <div className="serivce-details-desc">
                    {section.text.map((para, i) => (
  <p
    key={i}
    className={i === section.text.length - 1 ? 'pb-30' : ''}
    dangerouslySetInnerHTML={{ __html: para }}
  />
))}
                    </div>
                  </div>
                </div>
))}

                {/* <div className="col-lg-5 col-md-6">
                  <div className="service-details-thumb">
                  <img src={service.secondImage} alt={service.title} />
                  </div>
                </div> */}
                <div className="col-lg-12 col-md-12">
                  <div className="service-details-icon-box">
                    {/* <div className="service-page-title2">
                      <h1>What You Benifits</h1>
                    </div> */}
                    <div className="widget-service-details-icon">
                    {service.benefits.map((b, i) => (
                  <p key={i}>
                    <i className="bi bi-check-lg" /> <span>{b}</span>
                  </p>
                ))}
                      
                    </div>
                  </div>
                </div>

                
                <div className="col-lg-12">
                  <div className="service-details-content pt-40">
                    <div className="service-page-title2">
                      <h1>Working Process</h1>
                    </div>
                    {/* <div className="serivce-details-desc">
                      <p className="pb-35">
                        Prospective intellectual capital. Enthusiastically
                        create strategic communities without reliable Holisticly
                        embrace professional technologies create professional{" "}
                      </p>
                    </div> */}
                  </div>
                </div>
                

                {service.process.map((step, i) => (
                  <div className="col-lg-4 col-sm-6" key={i}>
                    <div className="service-work-process-box">
                      <div className="service-work-process-number">
                        <span>{step.step}</span>
                      </div>
                      <div className="service-work-process-title">
                        <h4>{step.title}</h4>
                      </div>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              {/* widget search */}
              {/* <div className="widget_search mt-5 mt-lg-0">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  method="get"
                >
                  <input
                    type="text"
                    name="s"
                    placeholder="Search Here"
                    title="Search for:"
                  />
                  <button type="submit" className="icons">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div> */}
             
              {/* categoreis thumb */}
              <div className="widget-categories-thumb">
                {/* widget categories content  */}
                <div className="widget-categories-content text-center">
                  <div className="logo-thumb">
                    <Link legacyBehavior href="/index">
                      <a>
                        {" "}
                        <img src="/assets/images/logo-white.png" alt />{" "}
                      </a>
                    </Link>
                  </div>
                  <div className="widget-title2">
                    <h3>Need Service?</h3>
                  </div>
                  <div className="widget-button">
                    <Link legacyBehavior href="/contact">
                      <a>
                        {" "}
                        <i className="bi bi-envelope" /> Contact Us{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ServiceDetails;
