import { Link } from "react-router-dom";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
import MainHeader from "../../../utils/MainHeader";

const MeetTeam = () => {
  return (
  
     <Container>
      <MainHeader headerText="Meet The Team" />
      <CardDeck>
        <Card className="team-card">
          <CardImg
            top
            width="100%"
            src="https://st3.depositphotos.com/6672868/13801/v/600/depositphotos_138013506-stock-illustration-user-profile-group.jpg"
            className="pict"
            alt="Card image cap"
          />
          <CardBody className="card-body">
            <CardTitle className="team-member">Clara Harmonson</CardTitle>
            <CardSubtitle className="job-title">Card subtitle</CardSubtitle>
            <CardText>
            This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Link to="/">
                Read Clara's Story
              </Link>
          </CardBody>
        </Card>
        <Card className="team-card">
          <CardImg
            top
            src="https://st3.depositphotos.com/6672868/13801/v/600/depositphotos_138013506-stock-illustration-user-profile-group.jpg"
            className="pict"
            alt="Card image cap"
          />
          <CardBody className="card-body">
            <CardTitle className="team-member">Marilyn Marquez</CardTitle>
            <CardSubtitle className="job-title">Card subtitle</CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Link to="/">
                Read Marilyn's Story
              </Link>
          </CardBody>
        </Card>
        <Card className="team-card">
          <CardImg
            top
            src="https://st3.depositphotos.com/6672868/13801/v/600/depositphotos_138013506-stock-illustration-user-profile-group.jpg"
            className="pict"
            alt="Card image cap"
          />
          <CardBody className="card-body">
            <CardTitle className="team-member">Carla Montano</CardTitle>
            <CardSubtitle className="job-title">Web Developer</CardSubtitle>
            <CardText>
            This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Link to="/">
                Read Carla's Story
              </Link>
          </CardBody>
        </Card>
        <Card className="team-card">
          <CardImg
            top
            
            src="https://st3.depositphotos.com/6672868/13801/v/600/depositphotos_138013506-stock-illustration-user-profile-group.jpg"
            className="pict"
            alt="Card image cap"
          />
          <CardBody className="card-body">
            <CardTitle className="team-member">Allie Pistolessi</CardTitle>
            <CardSubtitle className="job-title">Web Developer</CardSubtitle>
            <CardText>
            This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Link to="/">
                Read Allie's Story
              </Link>
          </CardBody>
        </Card>
        <Card className="team-card">
          <CardImg
            top
            src="https://st3.depositphotos.com/6672868/13801/v/600/depositphotos_138013506-stock-illustration-user-profile-group.jpg"
            className="pict"
            alt="Card image cap"
          />
          <CardBody className="card-body">
            <CardTitle className="team-member">Michael Rivera</CardTitle>
            <CardSubtitle className="job-title">Web Developer</CardSubtitle>
            <CardText>
            This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Link to="/">
                Read Michael's Story
              </Link>
          </CardBody>
        </Card>
      </CardDeck>
      <Row>
          <Col className="d-flex justify-content-center my-5">
          <Button className="resources-button mb-5 mb-md-0 mx-auto">
                Meet more teachers who code!
              </Button>
          </Col>
      </Row>
     
      </Container>
   
  );
};

export default MeetTeam;
