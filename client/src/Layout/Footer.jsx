import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4" data-aos="fade-right">
            <a href="#" class="logo">
              <span>H</span>ealth<span>C</span>are.
            </a>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              nemo porro quasi minima consequuntur dolorum, quas amet in autem
              id?
            </p>
          </div>

          <div class="col-md-4 text-center" data-aos="fade-up">
            <h3>links</h3>
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">facility</a>
            <a href="#">review</a>
            <a href="#">contact</a>
            <a href="#">post</a>
          </div>

          <div class="col-md-4 text-center" data-aos="fade-left">
            <h3>share</h3>
            <a href="#">facebook</a>
            <a href="#">twitter</a>
            <a href="#">instagram</a>
            <a href="#">github</a>
          </div>
        </div>
      </div>

      <h1 class="credit text-center mx-auto">
        Copyright &copy; <span>Healthico</span> | all rights reserved.
      </h1>
    </section>
  );
}

export default Footer;
