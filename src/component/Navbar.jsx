import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">E-Evolve</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"> Ongoing Courses<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Completed Courses</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;