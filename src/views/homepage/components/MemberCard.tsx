import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

interface Props {
  name: string;
  title: string;
  link: string;
  bio: string;
  portfolio?: string;
  image: string;
}

const MemberCard = ({ name, title, link, bio, image }: Props) => {
  return (
    
    <Col xs={12} md={4} className="mt-4 mt-md-0 mx-0 px-1">
    <Card className="teamCard">
      <CardImg
        top
        width="100%"
        src={image}
        className="pict"
        alt="Card image cap"
      />
      <CardBody className="cardBody d-flex flex-column align-items-center justify-content-center flex-wrap mb-5">
        <CardTitle className="teamMember">{name}</CardTitle>
        <CardSubtitle className="jobTitle">{title}</CardSubtitle>
        <CardText>{bio}</CardText>
        <Button className="BtnTeam">Read {name}'s story</Button>
      </CardBody>
    </Card>
    </Col>
  );
};

export default MemberCard;
