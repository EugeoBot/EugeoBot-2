import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospital,
  faUsers,
  faSmile,
  faProcedures,
} from "@fortawesome/free-solid-svg-icons";

function Counter() {
  return (
    <section class="counter">
      <div class="container">
        <div class="box-container">
          <div class="box">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <FontAwesomeIcon icon={faHospital} />
              <span>120+</span>
              <h3>Hospitals</h3>
            </AnimationOnScroll>
          </div>

          <div class="box">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <FontAwesomeIcon icon={faUsers} />
              <span>100+</span>
              <h3>staff</h3>
            </AnimationOnScroll>
          </div>

          <div class="box">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <FontAwesomeIcon icon={faSmile} />
              <span>1200+</span>
              <h3>happy patients</h3>
            </AnimationOnScroll>
          </div>

          <div class="box">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <FontAwesomeIcon icon={faProcedures} />
              <span>130+</span>
              <h3>bed facility</h3>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
