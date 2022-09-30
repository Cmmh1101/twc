import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";

const BlogsPageHero = () => {
    const { englishMode } = useTheme();
    return (
        <>
            <Jumbotron className="title" fluid>
                <Container fluid>
                    {englishMode ? (
                        <>
                            <h1 className="hero-title">The Teachers Who Code Blog</h1>
                            <h2> Tips, stories and resources to support your journey transitioning to tech </h2>
                        </>
                    ) : (
                        <>
                            <h1 className="hero-title">The Teachers Who Code Blog</h1>
                            <h2> Tips, stories and resources to support your journey transitioning to tech </h2>
                        </>
                    )}
                </Container>
            </Jumbotron>
        </>
    );
};

export default BlogsPageHero;
