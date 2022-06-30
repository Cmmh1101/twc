import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import {useTheme} from "../../../provider/ThemeModeProvider";
import MainHeader from "../../../utils/MainHeader";


function ResourceDescription ({ ...Resource}) {
    const { englishMode } = useTheme();

    return (
        <section className="py-5">
            <Container className="mb-5" id="twc-intro">
                <Row>
                    {englishMode ? (
                        <>
                        <h1 className="resource-title">
                            {Resource.titleSpanish}
                        </h1>
                        </>
                    ) : (
                        <>
                        <h1 className="techpathes-title">
                            {Resource.titleEnglish}
                        </h1>
                        </>
                    ) }
                </Row>
                <Row>
                    <MainHeader
                        headerText={
                         englishMode
                            ? "Descripcion Recurso"
                            : "Resource Description"
                        }
                    />
                    <Col
                        xs={12}
                        className="d-flex align-items-center
                        justify-content-center flex-wrap mb-5">
                    </Col>
                    <Col xs={12} md={12} className="px-0">
                        <div className="intro-img">
                            <img
                                src={Resource.descriptionImage}
                                alt={Resource.descriptionImageAltText}/>
                        </div>
                    </Col>
                    <Col xs={12} md={12} className="mt-4 px-5">
                            {englishMode ? (
                                <>
                                    <p> {Resource.DescriptionSpanish} </p>

                                </>
                            ) : (
                                <>
                                    <p> {Resource.DescriptionEnglish} </p>

                                </>
                            )}

                    </Col>                
                </Row>
                <Row>
                    <MainHeader
                        headerText={
                            englishMode
                                ? "Podcast"
                                : "Podcast"
                        }
                    />
                    <Col
                        xs={12}
                        className="d-flex align-items-center justify-content-center flex-wrap mb-5"
                    >
                        <Col xs={12} md={5} className="px-0">
                            <div className="intro-img">
                                <img
                                    src={Resource.skillImage}
                                    alt={Resource.skillImageAltText}
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={7} className="mt-4 px-5">
                            {englishMode ? (
                                <>
                                    <p> {Resource.DescriptionSpanish} </p>

                                </>
                            ) : (
                                <>
                                    <p> {Resource.DescriptionEnglish} </p>

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
                                ? "Libros"
                                : "Books"
                        }
                    />
                    <Col
                        xs={12}
                        className="d-flex align-items-center justify-content-center flex-wrap-reverse mb-5"
                    >
                        <Col xs={12} md={7} className="mt-4 px-5">
                            {englishMode ? (
                                <>
                                    <p> {Resource.bookDescriptionSpanish} </p>

                                </>
                            ) : (
                                <>
                                    <p> {Resource.bookDescriptionEnglish} </p>

                                </>
                            )
                            }
                        </Col>
                        <Col xs={12} md={5} className="px-0">
                            <div className="intro-img">
                                <img
                                    src={Resource.bookImage}
                                    alt={Resource.bookImageAltText}
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

export default ResourceDescription;

