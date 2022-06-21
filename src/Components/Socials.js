import React from 'react'

export default function Socials() {
  return (
    <>
      <div className="container">
        <div className="socials">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <h2>
                Join Discord &amp; Twitter <br /> to gain more perks
              </h2>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="follow-us d-flex justify-content-between justify_content_md_center align-items-center">
                <a href="/">
                  <img src="images/Discord.png" alt="" />
                </a>
                <a href="/">
                  <img src="images/twitter.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}