import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const FooterSection = () => (
  <footer className="footer text-center">
    <div className="container">
      <ul className="list-inline mb-5">
        <li className="list-inline-item">
          <a className="social-link rounded-circle text-white mr-3" href="#">
            <i className="icon-social-facebook" />
          </a>
        </li>
        <li className="list-inline-item">
          <a className="social-link rounded-circle text-white mr-3" href="#">
            <i className="icon-social-twitter" />
          </a>
        </li>
        <li className="list-inline-item">
          <a className="social-link rounded-circle text-white" href="#">
            <i className="icon-social-github" />
          </a>
        </li>
      </ul>
      <p className="text-muted small mb-0">
        Copyright &copy; Your Website 2018
      </p>
    </div>
  </footer>
);
export default FooterSection;
