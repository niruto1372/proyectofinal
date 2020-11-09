import React from "react";

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-sm navbar-dark  headerBar">
        <a class="navbar-brand" href="">
          CMA
        </a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Inicio <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Alarmas
              </a>
            </li>
          </ul>
          <span class="navbar-text">Nilton Santos</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
