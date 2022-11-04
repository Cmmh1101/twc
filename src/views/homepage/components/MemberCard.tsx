import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
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
    <Card className="teamCard">
      <CardImg
        top
        width="100%"
        src={image}
        className="pict"
        alt="Card image cap"
      />
      <CardBody className="cardBody">
        <h3 className="teamMember">{name}</h3>
        <CardSubtitle className="jobTitle">{title}</CardSubtitle>
        <CardText>{bio.substring(0, 60)}...</CardText>
        <Button className="resources-button mb-5 mb-md-0">Learn more</Button>
      </CardBody>
    </Card>
  );
};

export default MemberCard;
