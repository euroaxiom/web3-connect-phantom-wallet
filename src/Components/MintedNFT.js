import React from "react";

export default function MintedNFT() {
  return (
    <>
      <div className="minted-nft">
        <div className="container">
          <div className="dual-headings">
            <h4>Successfully</h4>
            <h2>Minted Nfts</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="client-img">
                <img src="images/client1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="client-img">
                <img src="images/client2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="client-img">
                <img src="images/client1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="client-img">
                <img src="images/client2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="proof text-center">
            <h2>Proof</h2>
            <img src="images/script.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
