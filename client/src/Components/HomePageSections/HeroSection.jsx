import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import illustration from "../../assets/images/doctors-illus.png";

function Hero() {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="row min-vh-100 align-items-center text-center text-md-left d-flex flex-row">
          <div className="col-md-6 pr-md-5">
            <AnimationOnScroll animateIn="animate__zoomIn" delay={200}>
              <img src={illustration} alt="" className="illustration" />
            </AnimationOnScroll>
          </div>
          <div className="col-md-6 pl-md-5 content">
            <AnimationOnScroll animateIn="animate__fadeInLeft" delay={200}>
              <h1>
                <span>stay</span> safe, <span>stay</span> healthy.
              </h1>
              <h3>caring for you.</h3>
              <a href="#">
                <button className="button">learn more</button>
              </a>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
