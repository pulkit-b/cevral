import Link from "next/link";
import { Fragment, useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [subMenus, setSubMenus] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeBtn = (value) => (value === activeMenu ? "-" : "+"),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" },
    setSub = (value, motherMenu) =>
      motherMenu === activeMenu && value == subMenus
        ? setSubMenus("")
        : setSubMenus(value),
    activeSub = (value) =>
      value === subMenus ? { display: "block" } : { display: "none" };
  return (
    <div className="mobile-menu-area sticky-header d-sm-block d-md-block d-lg-none header____">
      <div className="mobile-menu mean-container">
        <div className="mean-bar">
        <div className="logo">
              <Link legacyBehavior href="/">
                <a className="logo_img" title="consen">
                  <img src="/assets/images/logo-white.png" alt="logo" />
                </a>
              </Link>
              <Link legacyBehavior href="/">
                <a className="main_sticky" title="consen">
                  <img src="/assets/images/logo-white.png" alt="logo" />
                </a>
              </Link>
            </div>
          <a
            href="#nav"
            className={`meanmenu-reveal ${toggle ? "meanclose" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              "X"
            ) : (
              <Fragment>
                <span /> <span /> <span />
              </Fragment>
            )}
          </a>
          <nav className="mean-nav">
            <ul
              className="nav_scroll"
              style={{ display: toggle ? "block" : "none" }}
            >

              <li>
                <a href="/services">Services </a>
                <ul className="sub-menu" style={activeLi("Services")}>
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
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Services")}
                  style={{ fontSize: 18 }}
                >
                  {activeBtn("Services")}
                </a>
              </li>
              <li>
                <a href="#">Industries </a>
                <ul className="sub-menu" style={activeLi("Industries")}>
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
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Industries")}
                  style={{ fontSize: 18 }}
                >
                  {activeBtn("Industries")}
                </a>
              </li>

              <li>
                <a href="#">Products </a>
                <ul className="sub-menu" style={activeLi("Products")}>
                <li>
            <Link legacyBehavior href="/products/avi">
              AVI (Analytical Visual Interface)
            </Link>
          </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Products")}
                  style={{ fontSize: 18 }}
                >
                  {activeBtn("Products")}
                </a>
              </li>


              <li>
                <a href="#">Resource Center </a>
                <ul className="sub-menu" style={activeLi("Resource Center")}>
                <li>
            <Link legacyBehavior href="/blog">
              Blogs
            </Link>
          </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Resource Center")}
                  style={{ fontSize: 18 }}
                >
                  {activeBtn("Resource Center")}
                </a>
              </li>

              <li>
                <a href="#">Company </a>
                <ul className="sub-menu" style={activeLi("Company")}>
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
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Company")}
                  style={{ fontSize: 18 }}
                >
                  {activeBtn("Company")}
                </a>
              </li>


              <li className="mean-last">
                <Link legacyBehavior href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mean-push" />
      </div>
    </div>
  );
};
export default MobileMenu;
