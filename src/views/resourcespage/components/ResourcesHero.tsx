import React from "react";
import {Jumbotron, Container } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";

const ResourcesHero = () => {
    const { englishMode } = useTheme();
    return (
        <>
        <Jumbotron className="title" fluid>
            <Container fluid>
                {englishMode ? (
                    <>
                    <h1 className="hero-title">Resources</h1>
                    </>
                ): (
                    <>
                    <h1 className="hero-title">Recursos</h1>
                    </>
                )}
            </Container>

        </Jumbotron>
        </>
    );
};

export default ResourcesHero;