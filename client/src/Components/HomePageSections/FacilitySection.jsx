import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import doctor_2 from "../../assets/images/doctor-2.jpg";
import doctor_3 from "../../assets/images/doctor-3.jpg";
import doctor_4 from "../../assets/images/doctor-4.jpg";
import doctor_5 from "../../assets/images/doctor-5.jpg";
import doctor_6 from "../../assets/images/doctor-6.jpg";
import doctor_7 from "../../assets/images/doctor-7.jpg";
import doctor_8 from "../../assets/images/doctor-8.jpg";
import hospital_1 from "../../assets/images/hospital-1.jpg";
import hospital_2 from "../../assets/images/hospital-2.jpg";

function Facility() {
  return (
    <section class="facility" id="facility">
      <div class="container">
        <h1 class="heading">
          <span>'</span> our facilities <span>'</span>
        </h1>

        <div class="box-container">
          <div class="box">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <a href="#" title="our team">
                <img src={doctor_2} alt="" />
              </a>
            </AnimationOnScroll>
          </div>

          <div class="box">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <a href="#" title="our lab">
                <img src={doctor_3} alt="" />
              </a>
            </AnimationOnScroll>
          </div>

          <div class="box">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <a href="#" title="emergency rooms">
                <img src={doctor_4} alt="" />
              </a>
            </AnimationOnScroll>
          </div>

          <div class="box">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <a href="#" title="expert doctors">
                <img src={doctor_5} alt="" />
              </a>
            </AnimationOnScroll>
          </div>

          <div class="box">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <a href="#" title="expert doctors">
                <img src={doctor_6} alt="" />
              </a>
            </AnimationOnScroll>
          </div>

          <div class="box">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <a href="#" title="emergency rooms">
                <img src={doctor_7} alt="" />
              </a>
            </AnimationOnScroll>
          </div>

          <div class="box">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <a href="#" title="expert doctors">
                <img src={doctor_8} alt="" />
              </a>
            </AnimationOnScroll>
          </div>

          <div class="box">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <a href="#" title="emergency rooms">
                <img src={hospital_1} alt="" />
              </a>
            </AnimationOnScroll>
          </div>

          <div class="box">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <a href="#" title="enough beds">
                <img src={hospital_2} alt="" />
              </a>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facility;
