import { CardDeck, Container, Col, Row } from "reactstrap";
import MainHeader from "../../../utils/MainHeader";
import MemberCard from "./MemberCard";

const MeetTeam = () => {
  const member = [
    {
      name: "Clara",
      title: "Software Engineer",
      link: "",
      bio: "Clara stumbled into coding out of the need to create a website for her family business; which lead her to complete Nucamp's full stack bootcamp.  She is currently working as a Product Learning Specialist for Amplify and as a free lance web developer. When she's not at the computer trying to center a div or learning more JavaScript, she's drawing or cooking.",
      portfolio: "/",
      image: "../images/members/pic-holder.png",
    },
    {
      name: "Marilyn",
      title: "Software Engineer",
      link: "",
      bio: "Marilyn's journey in coding began with a community college course on HTML that slowly became an obsession. After years of working in education and playing around with HTML, CSS, and JavaScript she enrolled in a coding Bootcamp and became fell in love with Python programming. She is now working as a Full Stack Software Engineer at Webster University.",
      portfolio: "/",
      image: "../images/members/pic-holder.png",
    },
    {
      name: "Carla",
      title: "Software Engineer",
      link: "",
      bio: "Carla's journey into programming began by the need of a career change. What starter with a mini tutorial scaled up into a bootcamp and a career change story from a teacher to now a software engineer at Green Mountain Technology, enjoying the process of continuous development and the awesome developer community and friends around",
      portfolio: "https://carlamontano.tech",
      image: "../images/members/pic-carla.png",
    },
    {
      name: "Allison",
      title: "Software Engineer",
      link: "",
      bio: "Allison stumbled into coding out of the need of career change; which lead her to complete Nucamp's full stack bootcamp.  She is currently working as a Software Engineer for JP Morgan & Chase.",
      portfolio: "/",
      image: "../images/members/pic-allie.png",
    },
    {
      name: "Michael",
      title: "Software Engineer",
      link: "",
      bio: "Michael stumbled into coding out of the need to create a website for her family business; which lead him to complete Nucamp's full stack bootcamp.  He is currently working as a Backend developer and as a free lance web developer.",
      portfolio: "/",
      image: "../images/members/pic-holder.png",
    },
    // {
    //   name: "Zaida",
    //   title: "Software Engineer",
    //   link: "",
    //   bio: "soy un...",
    //   portfolio: "",
    //   image: "../images/members/pic-holder.png",
    // },
  ];
  return (
    <Container className="meet-team">
      <Row>
        <MainHeader headerText="Meet the Team" />
        <CardDeck className="d-flex align-items-center justify-content-center flex-wrap">
          {member.map((member, i) => {
            return (
              <Col xs={12} md={6} lg={4} className="my-3" key={i}>
                <MemberCard
                  name={member.name}
                  title={member.title}
                  link={member.link}
                  bio={member.bio}
                  image={member.image}
                  portfolio={member?.portfolio}
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
