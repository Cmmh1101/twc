import { CardDeck, Container, Col, Row } from "reactstrap";
import MainHeader from "../../../utils/MainHeader";
import MemberCard from "./MemberCard";

const MeetTeam = () => {
  const member = [
    {
      name: "Clara",
      title: "Software Engineer",
      link: "",
      bio: "Clara stumbled into coding out of the need to create a website for her family business; which lead her to complete Nucamp's full stack bootcamp.  She is currently working as a Product Learning Specialist for Amplify and as a free lance web developer. When she's not trying to center a div or learning more JavaScript,she's drawing or cooking.",
      portfolio: "",
      image: "",
    },
    {
      name: "Marilyn",
      title: "Software Engineer",
      link: "",
      bio: "Marilyn's journey in coding began with a community college course on HTML that slowly became an obsession. After years of working in education and playing around with HTML, CSS, and JavaScript she enrolled in a coding Bootcamp and became fell in love with Python programming. She is now pursuing a career in Back End development.",
      portfolio: "",
      image: "",
    },
    {
      name: "Michael",
      title: "Software Engineer",
      link: "",
      bio: "soy un...",
      portfolio: "",
      image: "",
    },
    {
      name: "Allison",
      title: "Software Engineer",
      link: "",
      bio: "soy un...",
      portfolio: "",
      image: "",
    },
    {
      name: "Zaida",
      title: "Software Engineer",
      link: "",
      bio: "soy un...",
      portfolio: "",
      image: "",
    },
    {
      name: "Carla",
      title: "Software Engineer",
      link: "",
      bio: "soy un...",
      portfolio: "",
      image: "",
    },
  ];
  return (
    <Container className="meet-team">
      <Row>
        <MainHeader headerText="Meet the Team" />
        <CardDeck>
          {member.map((member, i) => {
            return (
              <Col xs={4} className="my-3" key={i}>
                <MemberCard
                  name={member.name}
                  title={member.title}
                  link={member.link}
                  bio={member.bio}
                  image={member.image}
                />
              </Col>
            );
          })}
        </CardDeck>
      </Row>
    </Container>
  );
};

export default MeetTeam;
