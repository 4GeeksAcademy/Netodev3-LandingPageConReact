import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#343a40" }}
    >
      <div className="container">
        <a className="navbar-brand text-light" href="#">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a
              className="nav-link active text-light"
              aria-current="page"
              href="#"
            >
              Home
            </a>
            <a className="nav-link text-white-50" href="#">
              About
            </a>
            <a className="nav-link text-white-50" href="#">
              Services
            </a>
            <a className="nav-link text-white-50" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
