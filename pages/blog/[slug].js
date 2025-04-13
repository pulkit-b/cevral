import { useRouter } from "next/router";
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import allblog from "./content";

const BlogDetails = () => {
     const { query } = useRouter();
      const { slug } = query;
    
      const blog = allblog[slug];
    
      if (!blog) return <Layout><div className="container py-5">Service not found.</div></Layout>;
  return (
    <Layout footer={3}>
      <Breadcumb pageName={blog.title} />

      <div className="blog-section style-two details">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="blog-single-items">
                {/* Optional: Hero or Main Image */}
                {/* <div className="blog-thumb">
                  <img src="/assets/images/resource/blog-4.jpg" alt="Blog img" />
                </div> */}

                <div className="blog-content">
                  <div className="blog-content-text text-left">
                    <h5>{blog.title}</h5>

                    <div className="blog-meta">
                      <span><a href="#">{blog.authorName}</a></span> - 
                      <span> {blog.date}</span> - 
                      <span><a href="#"> 0 Comments</a></span>
                    </div>

                    {/* Blog Body Content */}
                    {blog.content.map((block, index) => {
                      switch (block.type) {
                        case "para":
                          return <p key={index}>{block.text}</p>;
                        case "image":
                          return (
                            <div className="blog-thumb" key={index}>
                              <img src={block.src} alt="Blog content image" />
                            </div>
                          );
                        case "quote":
                          return (
                            <div className="block-quote" key={index}>
                              <p>{block.text}</p>
                              <div className="block-quoto-footer">– {block.author}</div>
                            </div>
                          );
                        case "subheading":
                          return <h4 key={index}>{block.text}</h4>;
                        case "list":
                          return (
                            <ol key={index}>
                              {block.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ol>
                          );
                        default:
                          return null;
                      }
                    })}
                    
                    {/* Social Icons (Optional Footer Section) */}
                   
                  </div>
                </div>

                
              </div>
            </div>
            {/* Sidebar can go here if needed */}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogDetails;
