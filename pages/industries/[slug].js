import { useRouter } from "next/router";
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import industries from "@/content/industries/content";

const PortfolioDetails = () => {
    const { query } = useRouter();
  const { slug } = query;

  const industry = industries[slug];

  if (!industry) return <Layout><div className="container py-5">Service not found.</div></Layout>;

  return (
    <Layout>
      <Breadcumb pageName={industry.name} />
      <div className="case-study-details">
        <div className="container">
          
          <div className="case-study-intro upp">
            <div className="csd-content">
              <div className="csd-title pb-10">
                <h2>{industry.name}</h2>
              </div>
              <p>
                {industry.mainDescription}
              </p>
              <img className="my-4" src={industry.image} alt={industry.name} />

              {industry.details.map((para,i)=>(
                <p
                key={i}
                dangerouslySetInnerHTML={{ __html: para }}
              />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default PortfolioDetails;
