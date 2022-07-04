import React from "react";
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardImg, Col, Container, Row, CardGroup } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";
import MainHeader from "../../../utils/MainHeader";



function ResourceDescription({ ...ResourceData }) {
    const { englishMode } = useTheme();

    return (
        <section className="py-5">
            <Container>
                <Row>
                    <MainHeader headerText="Our Javascript Favorites" />
                </Row>
            </Container>
            <Container>
            <CardGroup className="d-flex align-items-center justify-content-center flex-wrap mb-5">
                <Col xs={12} md={4}>
                            <Card style={{ border: "none" }}>
                                <CardImg
                                    alt={ResourceData.descriptionImageAltText}
                                    src={ResourceData.image}
                                    top width="100%"
                                    className="card-image" />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Post Title 1
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6">
                                        {englishMode ? (
                                            <>
                                                <p> {ResourceData.DescriptionSpanish} </p>

                                            </>
                                        ) : (
                                            <>
                                                <p> {ResourceData.DescriptionEnglish} </p>

                                            </>
                                        )}

                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                            <Card style={{ border: "none" }}>
                                <CardImg
                                    alt={ResourceData.descriptionImageAltText}
                                    src={ResourceData.image}
                                    top width="100%"
                                    className="card-image" />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Post Title 1
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6">
                                        {englishMode ? (
                                            <>
                                                <p> {ResourceData.DescriptionSpanish} </p>

                                            </>
                                        ) : (
                                            <>
                                                <p> {ResourceData.DescriptionEnglish} </p>

                                            </>
                                        )}
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
            </Col>
        </CardGroup>

         
              
                    
                    </Container>
              
               
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
                                )}
                            </Button>
                </Col>
                

           
        </section>
    );
}

export default ResourceDescription;

