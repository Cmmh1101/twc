import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";
import MainHeader from "../../../utils/MainHeader";


function RoleDescription({ ...techPath }) {
    const { englishMode } = useTheme();

    return (
        <section className="py-5">
            <Container className="mb-5" id="twc-intro">
                <Row>
                    {englishMode ? (
                        <>
                            <h1 className="techpaths-title"> {techPath.titleSpanish} </h1>

                        </>
                    ) : (
                        <>
                            <h1 className="techpaths-title"> {techPath.titleEnglish} </h1>

                        </>
                    )}
                </Row>
                <Row>
                    <MainHeader
                        headerText={
                            englishMode
                                ? "Descripción del rol"
                                : "Role Description"
                        }
                    />
                    <Col
                        xs={12}
                        className="d-flex align-items-center justify-content-center flex-wrap mb-5"
                    >
                        <Col xs={12} md={12} className="px-0">
                            <div className="intro-img">
                                <img
                                    src={techPath.descriptionImage}
                                    alt={techPath.descriptionImageAltText}
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={12} className="mt-4 px-5">
                            {englishMode ? (
                                <>
                                    <p> {techPath.roleDescriptionSpanish} </p>

                                </>
                            ) : (
                                <>
                                    <p> {techPath.roleDescriptionEnglish} </p>

                                </>
                            )}

                        </Col>
                    </Col>
                </Row>
                <Row>
                    <MainHeader
                        headerText={
                            englishMode
                                ? "Destrezas"
                                : "Skills"
                        }
                    />
                    <Col
                        xs={12}
                        className="d-flex align-items-center justify-content-center flex-wrap mb-5"
                    >
                        <Col xs={12} md={5} className="px-0">
                            <div className="intro-img">
                                <img
                                    src={techPath.skillImage}
                                    alt={techPath.skillImageAltText}
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={7} className="mt-4 px-5">
                            {englishMode ? (
                                <>
                                    <p> {techPath.skillDescriptionSpanish} </p>

                                </>
                            ) : (
                                <>
                                    <p> {techPath.skillDescriptionEnglish} </p>

                                </>
                            )
                            }
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <MainHeader
                        headerText={
                            englishMode
                                ? "Herramientas"
                                : "Tools"
                        }
                    />
                    <Col
                        xs={12}
                        className="d-flex align-items-center justify-content-center flex-wrap-reverse mb-5"
                    >
                        <Col xs={12} md={7} className="mt-4 px-5">
                            {englishMode ? (
                                <>
                                    <p> {techPath.toolDescriptionSpanish} </p>

                                </>
                            ) : (
                                <>
                                    <p> {techPath.toolDescriptionEnglish} </p>

                                </>
                            )
                            }
                        </Col>
                        <Col xs={12} md={5} className="px-0">
                            <div className="intro-img">
                                <img
                                    src={techPath.toolImage}
                                    alt={techPath.toolImageAltText}
                                />
                            </div>
                        </Col>
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

export default RoleDescription;
