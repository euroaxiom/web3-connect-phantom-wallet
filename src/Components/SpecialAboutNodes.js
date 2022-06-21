import React from "react";

export default function SpecialAboutNodes() {
  return (
    <>
      <div className="special-about-nodes">
        <div className="dual-headings">
          <h4>What is</h4>
          <h2>Special about our Nodes</h2>
        </div>
        <div className="row rec-bg">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="img-box">
              <div className="img">
                <div className="_img">
                  <img src="images/fastest-server.png" alt="" />
                </div>
              </div>
              <div className="box-body">
                <h4>Fastest Servers</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="img-box">
              <div className="img">
                <div className="_img">
                  <img src="images/enterprise-infrastructure.png" alt="" />
                </div>
              </div>
              <div className="box-body">
                <h4>Enterprise <br /> Infrastructure</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="img-box">
              <div className="img">
                <div className="_img">
                  <img src="images/enterprise-grade-security.png" alt="" />
                </div>
              </div>
              <div className="box-body">
                <h4>Enterprise grade <br /> security</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="img-box">
              <div className="img">
                <div className="_img">
                  <img src="images/ip whitelisting.png" alt="" />
                </div>
              </div>
              <div className="box-body">
                <h4>IP Whitelisting</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
