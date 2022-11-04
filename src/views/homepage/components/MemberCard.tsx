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
      <CardImg top src={image} className="team-img" alt="Card image cap" />
      <CardBody className="cardBody">
        <h4 className="teamMember">{name}</h4>
        <h5 className="jobTitle">{title}</h5>
        {/* <CardText>{bio.substring(0, 60)}...</CardText> */}
        <CardText>{bio}</CardText>
        <div className="d-flex justify-content-around">
          <a href={portfolio} target="_blank" rel="noreferrer">
            <FaLink className="socialIcon" size="2em" />
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <FaLinkedin className="socialIcon" size="2em" />
          </a>
        </div>
        {/* <a className="resources-button mb-5 mb-md-0">Read Story</a> */}
      </CardBody>
    </Card>
  );
};

export default MemberCard;
