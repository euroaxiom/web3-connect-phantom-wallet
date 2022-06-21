import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-4">
        <div className="container">
          <a className="navbar-brand m-0" href="/">
            <img src="images/logo.png" alt="" />
          </a>
          <div className="info d-flex justify-content-between align-items-center">
            <ul className="navbar-nav d_md_none">
              <li className="nav-item">
                <a
                  className="nav-link"
                  _role="button" _role_btn="nav-btn"
                  aria-current="page"
                  href="/"
                >
                  NFTs
                </a>
              </li>
            </ul>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNodesNinja"
              aria-controls="navbarNodesNinja"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="toggle_btn_custom">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNodesNinja">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  _role="button"
                  aria-current="page"
                  href="/"
                >
                  NFTs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  _role="quick-link"
                  aria-current="page"
                  href="/"
                >
                  Get On
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
