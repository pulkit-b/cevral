import Link from "next/link";

export const DaskTopMenusMenus = () => {
  return (
    <ul className="nav_scroll">
      {" "}
      <li>
        <a href="/">
          Home{" "}
        </a>
      </li>{" "}
      <li>
        <a href="#">
          Services{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
  <li>
    <Link legacyBehavior href="/services/cevral-ai">
      Cevral.AI
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/services/application-development-management">
      Application Development & Management
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/services/cloud-infrastructure">
      Cloud & Infrastructure
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/services/consulting">
      Consulting
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/services/cx-transformation">
      CX Transformation
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/services/data-analytics">
      Data & Analytics
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/services/enterprise-integration">
      Enterprise Integration
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/services/enterprise-it-security">
      Enterprise IT Security
    </Link>
  </li>
</ul>

      </li>{" "}
      <li>
        <a href="#">
          Industries{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
  <li>
    <Link legacyBehavior href="/industries/manufacturing">
      Manufacturing
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/industries/bfsi">
      BFSI
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/industries/retail">
      Retail
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/industries/telecom-media">
      Telecom & Media
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/industries/healthcare">
      Healthcare
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/industries/consumer-tech">
      Consumer Tech
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/industries/software-hi-tech">
      Software & Hi-Tech
    </Link>
  </li>
</ul>
      </li>{" "}
      <li>
        <a href="#">
          Products{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="/products/avi">
              AVI (Analytical Visual Interface)
            </Link>
          </li>
        </ul>
      </li>{" "}
      <li>
        <a href="#">
          Resource Center{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="/blog">
              Blogs
            </Link>
          </li>{" "}
          {/* <li>
            <Link legacyBehavior href="blog-list">
              Case Studies
            </Link>
          </li>{" "} */}
        </ul>
      </li>{" "}
      <li>
        <a href="#">
          Company{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="/about">
              Overview
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/about#corporate-values">
              Corporate Values
            </Link>
          </li>{" "}
          {/* <li>
            <Link legacyBehavior href="blog-2column">
              Diversity & Inclusions
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="blog-details">
              Social & Governance
            </Link>
          </li> */}
        </ul>
      </li>{" "}
      <li>
        <Link legacyBehavior href="contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};
