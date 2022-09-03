import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <body>
      <div className="container">
        <h1 className="title is-1 ">Hireable-Hippo-Helper</h1>
        <h2 className="subtitle">We help young pottamus get hired!</h2>
        <a href="learn more" class="button is-white is-medium is-inverted">
          Learn More&ensp;<i className="fad fa-chevron-right"></i>
        </a>
      </div>

      <div>
        <Link to="/Signup">
          <button type="button">Sign Up!</button>
        </Link>
      </div>
    </body>
    
  );
}

export default HeroSection;
