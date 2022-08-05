import React from "react";
import Hero from "./components/Hero";
import IntroTWC from "./components/IntroTWC";
import Resources from "./components/Resources";
import BlogPostList from "./components/BlogPostList";
import MeetTeam from "./components/MeetTeam";

const HomePage = () => {
  return (
    <>
      <Hero />
      <IntroTWC />
      <Resources />
      <BlogPostList />
      <MeetTeam />
    </>
  );
};

export default HomePage;
