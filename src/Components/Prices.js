import React from "react";

export default function Prices() {
  return (
    <>
    <h2 className="text-center mt-5">Prices</h2>
      <div className="prices">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="price-card pl_0">
                <div className="img">
                  <img src="images/vission-1.png" alt="" />
                </div>
                <div className="price">
                  <h4>0.5 Sol/Day</h4>
                  <a href="/" className="d-flex align-items-center">
                    <span className="me-1">Start Minting</span>{" "}
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="price-card">
                <div className="img">
                  <img src="images/vission.png" alt="" />
                </div>
                <div className="price">
                  <h4>1.5 Sol/Weak</h4>
                  <a href="/" className="d-flex align-items-center">
                    <span className="me-1">Start Minting</span>{" "}
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="price-card pl_150 pe-0">
                <div className="img">
                  <img src="images/vission-1.png" alt="" />
                </div>
                <div className="price">
                  <h4>4 Sol/Month</h4>
                  <a href="/" className="d-flex align-items-center">
                    <span className="me-1">Start Minting</span>{" "}
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
