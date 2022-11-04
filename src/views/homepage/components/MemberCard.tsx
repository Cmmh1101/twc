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
      <CardImg top src={image} className="team-img" alt="Card image cap" />
      <CardBody className="cardBody">
        <h4 className="teamMember">{name}</h4>
        <h5 className="jobTitle">{title}</h5>
        <CardText>{bio.substring(0, 60)}...</CardText>
        <Button className="resources-button mb-5 mb-md-0">Read Story</Button>
      </CardBody>
    </Card>
  );
};

export default MemberCard;
