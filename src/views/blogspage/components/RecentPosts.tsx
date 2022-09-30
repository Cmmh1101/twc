import React from "react";
import { Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";
import MainHeader from "../../../utils/MainHeader";

interface Props { }

const RecentPosts = (props: Props) => {
    const { englishMode } = useTheme();
    return (
        <Container className="" id="recent-posts">
            <Row>
                <MainHeader
                    headerText={
                        englishMode
                            ? "Publicaciones Más Recientes"
                            : "Most Recent Posts"
                    }
                />
            </Row>
            <Row className="d-flex align-items-center justify-content-center flex-wrap">
                <Col
                    xs={12}
                >
                    <CardGroup className="d-flex align-items-center justify-content-center flex-wrap mb-5">
                        <Col xs={12} md={8} className="mt-4 mt-md-0">
                            <Card style={{ border: "none" }} className="bg-transparent">
                                <CardImg
                                    alt="Post 1 Image"
                                    src="https://picsum.photos/318/180"
                                    top
                                    width="100%"
                                    className="card-image"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Post Title 1
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        Category: transitioning teacher
                                    </CardSubtitle>
                                    <CardSubtitle
                                        tag="h6"
                                    ><small className="mb-2 text-muted">
                                            Published: 01/2022
                                        </small>
                                    </CardSubtitle>
                                    <CardText>
                                        Blog post text
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} className="mt-4 mt-md-0 mx-0">
                            <Card style={{ border: "none" }} className="mb-4 card w-500 bg-transparent">
                                <CardImg
                                    alt="Post 2 Image"
                                    src="https://picsum.photos/318/180"
                                    top
                                    width="100%"
                                    className="card-image shadow-lg"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Post Title 2
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        Category: transitioning teacher
                                    </CardSubtitle>
                                    <CardText>
                                        Blog post text
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card style={{ border: "none" }} className="mt-4 bg-transparent">
                                <CardImg
                                    alt="Post 3 Image"
                                    src="https://picsum.photos/318/180"
                                    top
                                    width="100%"
                                    className="card-image"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Post Title 3
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        Category: transitioning teacher
                                    </CardSubtitle>
                                    <CardText>
                                        Blog post text
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default RecentPosts;
