import React from "react";
import { NavLink } from "react-router-dom";
import "../home-desktop-styles/heroSection.css";
import "../home-laptop-styles/heroSection.css";
import "../home-phone-styles/heroSection.css";

function HeroSection(props) {
  return (
    <div className="hero-section">
      <div className="hero-top-heading-container">
        <div className="three-dashes display-flex-colmun">
          <span></span>
          <span className="middel-dash"></span>
          <span></span>
        </div>
        <div className="hero-top-heading">
          <div className="hero-top-heading-icon display-flex-row flex-jusitfy-center flex-justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p>
            <span className="color-orange">Unlock</span> Your Creative Potential
          </p>
        </div>
        <div>
          <p>with Online Design and Development Courses.{props.title.title}</p>
          <p>Learn from Industry Experts and Enhance Your Skills.</p>
        </div>
      </div>
      <div className="hero-section-buttons-container display-flex-row">
        <NavLink to="courses">Explore Courses</NavLink>
        <NavLink to="pricing">View Pricing</NavLink>
      </div>
    </div>
  );
}

export default HeroSection;
