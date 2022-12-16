import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import doctor_4 from "../../assets/images/doctor-4.jpg";
import doctor_6 from "../../assets/images/doctor-6.jpg";
import doctor_8 from "../../assets/images/doctor-8.jpg";

function Post() {
  return (
    <section class="post" id="post">
      <div class="container min-vh-100">
        <h1 class="heading">
          <span>'</span> out posts <span>'</span>
        </h1>

        <div class="box-container">
          <div class="box">
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <img src={doctor_4} alt="" />
              <div class="content">
                <span>jan 5, 2021</span>
                <a href="#">
                  <h3>post title goes here</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  ex porro libero at veniam molestias facere quo necessitatibus
                  ipsum ad?
                </p>
                <a href="#">
                  <button class="button">learn more</button>
                </a>
              </div>
            </AnimationOnScroll>
          </div>

          <div class="box">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <img src={doctor_6} alt="" />
              <div class="content">
                <span>jan 5, 2021</span>
                <a href="#">
                  <h3>post title goes here</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  ex porro libero at veniam molestias facere quo necessitatibus
                  ipsum ad?
                </p>
                <a href="#">
                  <button class="button">learn more</button>
                </a>
              </div>
            </AnimationOnScroll>
          </div>

          <div class="box">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <img src={doctor_8} alt="" />
              <div class="content">
                <span>jan 5, 2021</span>
                <a href="#">
                  <h3>post title goes here</h3>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  ex porro libero at veniam molestias facere quo necessitatibus
                  ipsum ad?
                </p>
                <a href="#">
                  <button class="button">learn more</button>
                </a>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Post;
