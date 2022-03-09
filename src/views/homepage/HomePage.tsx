import React from "react";
import { Container } from "reactstrap";
import BannerDivider from "../../utils/BannerDivider";
import MainHeader from "../../utils/MainHeader";
import ProgramsList from "../articles/components/ProgramsList";
import StoriesList from "../storiesOfHope.tsx/components/StoriesList";
import DonateBanner from "./components/DonateBanner";
import Introduction from "./components/Introduction";

const HomePage = () => {
  return (
    <>
      <div className="main-banner">
        <BannerDivider
          className="banner-content"
          bannerText="HOPE FOR THE NATIONS"
          bannerContent="Serving the needed community through God."
          imgSrc="https://image.shutterstock.com/image-photo/muzaffarpur-india-may-10-2017-260nw-674314204.jpg"
          altText="kids receiving lunch"
        />
      </div>
      <Container>
        <Introduction />
      </Container>
      <div className="banner-divider">
        <BannerDivider
          className="banner-content"
          bannerText="What we do"
          bannerContent="All of our programs are open to communities in need from the children to the elder members. We be;eive we can make a difference in the lives of children, parents, grandparents and families, to break the circle of poverty in our community."
          imgSrc="https://image.shutterstock.com/image-photo/muzaffarpur-india-may-10-2017-260nw-674314204.jpg"
          altText="kids receiving lunch"
        />
      </div>
      <Container className="pt-5">
        <MainHeader headerText="Our programs" />
        <ProgramsList />
      </Container>
      <div className="banner-divider">
        <BannerDivider
          className="banner-content"
          bannerText="Who we serve"
          bannerContent="All of our programs are open to communities in need from the children to the elder members. We be;eive we can make a difference in the lives of children, parents, grandparents and families, to break the circle of poverty in our community."
          imgSrc="https://image.shutterstock.com/image-photo/muzaffarpur-india-may-10-2017-260nw-674314204.jpg"
          altText="kids receiving lunch"
        />
      </div>
      <Container className="pt-5">
        <MainHeader headerText="Stories of Hope" />
        <StoriesList />
      </Container>
      <DonateBanner />
    </>
  );
};

export default HomePage;
