import React from "react";
import { Button, Col, Container, Row, CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import MainHeader from "../../../utils/MainHeader";

const BlogPostList = () => {
    return (
        <section className="py-5">
            <Container>
                <Row>
                    <MainHeader headerText="Recent Transitioning Teachers' Stories" />
                    <CardGroup className="d-flex align-items-center justify-content-center flex-wrap mb-5">
                        <Col xs={12} md={4} className="mt-4 mt-md-0 mx-0 px-5">
                            <Card style={{ border: "none" }}>
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
                                        Category
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} className="mt-4 mt-md-0 mx-0 px-5">
                            <Card style={{ border: "none" }}>
                                <CardImg
                                    alt="Post 2 Image"
                                    src="https://picsum.photos/318/180"
                                    top
                                    width="100%"
                                    className="card-image"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Post Title 2
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        Category
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} className="mt-4 mt-md-0 mx-0 px-5">
                            <Card style={{ border: "none" }}>
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
                                        Category
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </CardGroup>
                </Row>
            </Container>
        </section>
    );
};

export default BlogPostList;
