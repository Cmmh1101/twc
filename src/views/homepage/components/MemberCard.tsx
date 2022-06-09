import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
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
        <CardTitle className="teamMember">{name}</CardTitle>
        <CardSubtitle className="jobTitle">{title}</CardSubtitle>
        <CardText>{bio}</CardText>
        <Button type="button">{link}</Button>
        <Button className="BtnTeam">Read {name}'s story</Button>
      </CardBody>
    </Card>
  );
};

export default MemberCard;
