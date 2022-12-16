import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmbulance,
  faProcedures,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import doctor_1 from "../../assets/images/doctor-1.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-md-6 content" data-aos="fade-right">
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <div className="box">
                <h3>
                  <FontAwesomeIcon icon={faAmbulance} /> ambulance services
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  suscipit.
                </p>
              </div>

              <div className="box">
                <h3>
                  <FontAwesomeIcon icon={faProcedures} /> emergency rooms
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  suscipit.
                </p>
              </div>

              <div className="box">
                <h3>
                  <FontAwesomeIcon icon={faStethoscope} /> free check-ups
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  suscipit.
                </p>
              </div>
            </AnimationOnScroll>
          </div>

          <div className="col-md-6 d-none d-md-block" data-aos="fade-left">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <img src={doctor_1} alt="" className="doctor-about" />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
