import { Card, CardImg, CardBody, CardText } from "reactstrap";
import { FaLinkedin, FaLink } from "react-icons/fa";

interface Props {
  name: string;
  title: string;
  link: string;
  bio: string;
  portfolio?: string;
  image: string;
}

const MemberCard = ({ name, title, link, bio, image, portfolio }: Props) => {
  return (
    <Card className="teamCard">
      <CardImg
        top
        src={image}
        style={{ width: "60%", margin: "0 auto" }}
        className="team-img"
        alt="Card image cap"
      />
      <CardBody className="cardBody text-center">
        <h4 className="teamMember">{name}</h4>
        <h5 className="jobTitle">{title}</h5>
        <hr style={{ width: "50%", margin: "0 auto 1rem" }} />
        <CardText>{bio}</CardText>
        <div className="d-flex justify-content-around">
          <a href={portfolio} target="_blank" rel="noreferrer">
            <FaLink className="socialIcon" size="2em" />
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <FaLinkedin className="socialIcon" size="2em" />
          </a>
        </div>
      </CardBody>
    </Card>
  );
};

export default MemberCard;
