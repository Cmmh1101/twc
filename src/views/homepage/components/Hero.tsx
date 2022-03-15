import { Jumbotron, Container } from "reactstrap";

const Hero = () => {
    return (
        <>
            <Jumbotron className="title" fluid>
                <Container fluid>
                    <h1 className="display-3"> teachers.who.code. </h1>
                    <p className="lead"> Helping teachers succeed in and out of the classroom using tech.</p>
                </Container>
            </Jumbotron>

        </>
    );
}

export default Hero;