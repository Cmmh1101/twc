import React from "react";
import {Jumbotron, Container } from "reactstrap";

const ResourcesHero = () => {
    return (
        <Jumbotron className="innerHero title" fluid>
            <Container fluid>
                <h1 className="hero-title">Resources</h1>
            </Container>

        </Jumbotron>
    );
};

export default ResourcesHero;