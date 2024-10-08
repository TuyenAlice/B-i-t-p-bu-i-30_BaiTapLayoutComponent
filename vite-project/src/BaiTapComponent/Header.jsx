import React from "react";

export const Header = () => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-lg-5">
            <a className="navbar-brand" href="#!">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Header*/}
        <header className="py-5">
          <div className="container px-lg-5">
            <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
              <div className="m-4 m-lg-5">
                <h1 className="display-5 fw-bold">A warm welcome!</h1>
                <p className="fs-4">
                  Bootstrap utility classes are used to create this jumbotron
                  since the old component has been removed from the framework.
                  Why create custom CSS when you can use utilities?
                </p>
                <a className="btn btn-primary btn-lg" href="#!">
                  Call to action
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
