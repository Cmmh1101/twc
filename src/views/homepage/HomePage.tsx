import React from "react";
import Hero from "./components/Hero";
import MeetTeam from "./components/MeetTeam";
import IntroTWC from "./components/IntroTWC";
import Resources from "./components/Resources";
import CareerTest from "./components/CareerTest";


const HomePage = () => {
  return (
    <>
      <Hero />
      <IntroTWC />
      <Resources />
      <MeetTeam />
      <CareerTest />
    </>
  );
};

export default HomePage;
