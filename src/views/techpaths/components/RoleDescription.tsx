import path from "path";
import React, { useState } from "react";
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
                                    src="https://picsum.photos/318/180"
                                    alt="filler"
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={12} className="mt-4 px-5">
                            <p className="">
                                {techPath.roleDescriptionEnglish}
                            </p>
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
                                    src="https://picsum.photos/318/180"
                                    alt="filler"
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={7} className="mt-4 px-5">
                            <p className="">
                                Ut maxime voluptate aut aliquam obcaecati At voluptas voluptatem.
                                Et temporibus possimus et soluta voluptatem ut magni voluptatem eos voluptatibus officiis.
                                Eum sequi voluptatibus quo similique consequuntur qui praesentium consequatur.
                            </p>
                            <p className="">
                                Ut maxime voluptate aut aliquam obcaecati At voluptas voluptatem.
                                Et temporibus possimus et soluta voluptatem ut magni voluptatem eos voluptatibus officiis.
                                Eum sequi voluptatibus quo similique consequuntur qui praesentium consequatur.
                            </p>
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
                            <p className="">
                                1Ut maxime voluptate aut aliquam obcaecati At voluptas voluptatem.
                                Et temporibus possimus et soluta voluptatem ut magni voluptatem eos voluptatibus officiis.
                                Eum sequi voluptatibus quo similique consequuntur qui praesentium consequatur.
                            </p>
                            <p className="">
                                2Ut maxime voluptate aut aliquam obcaecati At voluptas voluptatem.
                                Et temporibus possimus et soluta voluptatem ut magni voluptatem eos voluptatibus officiis.
                                Eum sequi voluptatibus quo similique consequuntur qui praesentium consequatur.
                            </p>
                        </Col>
                        <Col xs={12} md={5} className="px-0">
                            <div className="intro-img">
                                <img
                                    src="https://picsum.photos/318/180"
                                    alt="filler"
                                />
                            </div>
                        </Col>
                    </Col>
                    <Col xs={12} md={7} className="d-flex align-items-center justify-content-center">
                        <Button className="resources-button m-5 mb-md-0">
                            Find resources
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default RoleDescription;
