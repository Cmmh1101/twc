import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import {useTheme} from "../../../provider/ThemeModeProvider";



function ResourceDescription ({ ...ResourceData}) {
    const { englishMode } = useTheme();

    return (
        <section className="py-5">
            <Container className="mb-5" id="twc-intro">
                <Row>
                    {englishMode ? (
                        <>
                        <h1 className="resource-title">
                            {ResourceData.titleSpanish}
                        </h1>
                        </>
                    ) : (
                        <>
                        <h1 className="resource-title">
                            {ResourceData.titleEnglish}
                        </h1>
                        </>
                    ) }
                </Row>
                <Row>

                    <Col
                        xs={12}
                        className="d-flex align-items-center
                        justify-content-center flex-wrap mb-5">
                    </Col>
                    <Col xs={12} md={12} className="px-0">
                        <div className="intro-img">
                            <img
                                src={ResourceData.image}
                                alt={ResourceData.descriptionImageAltText}/>
                        </div>
                    </Col>
                    <Col xs={12} md={12} className="mt-4 px-5">
                            {englishMode ? (
                                <>
                                    <p> {ResourceData.DescriptionSpanish} </p>

                                </>
                            ) : (
                                <>
                                    <p> {ResourceData.DescriptionEnglish} </p>

                                </>
                            )}

                    </Col>
                    <Col xs={12} md={7} className="d-flex align-items-center justify-content-center">
                        <Button className="resources-button m-5 mb-md-0">
                            {englishMode ? (
                                <>
                                    Busca los recursos

                                </>
                            ) : (
                                <>
                                    Find resources

                                </>
                            )
                            }
                        </Button>
                    </Col>                
                </Row>
              
               
            </Container>
        </section>
    );
};

export default ResourceDescription;

