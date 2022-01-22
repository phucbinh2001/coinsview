import React from "react";
import logoDark from "../../logo-dark.svg";
import imgFooter from "../../newsletter_bg_dark.svg";
import "./style.scss";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
      {/* Section: Social media */}
      <section className="d-flex   border-bottom ">
        <div className="container justify-content-center justify-content-lg-between p-4 d-flex">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href className="me-4 text-white">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </div>
        </div>

        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <img src={logoDark} alt="" />
              </h6>
              <p>
                Complete cryptocurrency market coverage with live coin prices,
                charts and crypto market cap featuring 13822 coins on 367
                exchanges.
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Coinsview</h6>
              <p>
                <a href="#!" className="text-reset">
                  Report a Bug
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Advertise
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  About and AFQ
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
              <img src={imgFooter} alt="" height={300} />
            </div>
            {/* Grid column */}
            {/* Grid column */}

            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:{" "}
        <a className="text-reset fw-bold" href>
          coinsview.io
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
