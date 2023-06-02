import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../lib/Constant";

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = ({}) => {
  const [pathName, setpathName] = useState(window.location.pathname);
  const navMenu = [
    {
      id: 1,
      name: "Customers",
      href: "/",
    },
    {
      id: 2,
      name: "Products",
      href: "/products",
    },
    {
      id: 3,
      name: "Contact Us",
      href: "/contactus",
    },
    {
      id: 4,
      name: "About Us",
      href: "/aboutus",
    },
  ];

  return (
    <nav
      style={{ height: "10%" }}
      className="navbar navbar-expand-lg navbar-light bg-primary px-4"
    >
      <div /* className='ps-5' */ style={{ height: "40px", width: "40px" }}>
        <img src={logo} className=" h-100 w-100" />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ps-3">
          {navMenu?.map((item: any) => {
            return (
              <li
                className={
                  pathName == item.href
                    ? "nav-item bg-light rounded"
                    : "nav-item "
                }
                key={item.id}
              >
                <Link
                  className={
                    pathName == item.href
                      ? "nav-link text-dark"
                      : "nav-link text-light"
                  }
                  to={item.href}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
