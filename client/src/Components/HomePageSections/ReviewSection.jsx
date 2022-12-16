import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import person_1 from "../../assets/images/person-1.jpg";
import person_2 from "../../assets/images/person-2.jpg";
import person_3 from "../../assets/images/person-3.jpg";

function Review() {
  return (
    <section class="review" id="review">
      <div class="container">
        <h1 class="heading">
          <span>'</span> people's review <span>'</span>
        </h1>

        <div class="box-container">
          <div class="box" data-aos="fade-right">
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur accusantium error numquam dolore atque. Atque totam
                ad sint ducimus! Maxime!
              </p>
              <h3>someone's name</h3>
              <span>jan 5, 2021</span>
              <img src={person_1} alt="" />
            </AnimationOnScroll>
          </div>

          <div class="box">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur accusantium error numquam dolore atque. Atque totam
                ad sint ducimus! Maxime!
              </p>
              <h3>someone's name</h3>
              <span>jan 7, 2021</span>
              <img src={person_2} alt="" />
            </AnimationOnScroll>
          </div>

          <div class="box">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur accusantium error numquam dolore atque. Atque totam
                ad sint ducimus! Maxime!
              </p>
              <h3>someone's name</h3>
              <span>jan 10, 2021</span>
              <img src={person_3} alt="" />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
