import React from "react";
import "animate.css/animate.min.css";
import "./styles/Home.css";
import About from "./HomePageSections/AboutSection";
import Facility from "./HomePageSections/FacilitySection";
import Review from "./HomePageSections/ReviewSection";
import Counter from "./HomePageSections/CounterSection";
import Post from "./HomePageSections/PostSection";
import Hero from "./HomePageSections/HeroSection";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Facility />
      <Review />
      <Counter />
      <Post />
    </>
  );
}

export default Home;
