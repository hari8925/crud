import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className=" footer bg-light text-center fixed-bottom b-0 text-lg-start">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Employee Details. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
