import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      style={{ height: "10%" }}
      className="footer mt-auto py-3 bg-primary"
    >
      <div className="container text-center">
        <span className=" text-light">
          KNILA IT Solutions India Pvt Ltd © 2023. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
