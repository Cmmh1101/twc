import React from "react";
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardImg, Container, CardGroup } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";
import MainHeader from "../../../utils/MainHeader";

function ResourceDescription({ ...ResourceData }) {
    const { englishMode } = useTheme();

    return (
        <section className="py-5">
            <Container>
                <MainHeader headerText="Our JavaScript Favorites" />
            </Container>
            <Container xs={12} md={4}>
                <CardGroup className="d-flex align-items-center justify-content-center flex-wrap mb-5">
                    <Card style={{ border: "none" }} className="mt-4 mt-md-0 mx-0 px-3">
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
                        
                <Button className=" align-items-center resources-button m-2 mb-md-0">
                    {englishMode ? (
                        <> Ir a la Pagina
                        </>) : (
                        <> Go to Website
                        </>
                    )}
                </Button>
                    </CardBody>
                </Card>
                <Card style={{ border: "none" }} className="mt-4 mt-md-0 mx-0 px-3">
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
                        
                <Button className=" align-items-center resources-button m-2 mb-md-0">
                    {englishMode ? (
                        <> Ir a la Pagina
                        </>) : (
                        <> Go to Website
                        </>
                    )}
                </Button>
                    </CardBody>
                </Card>

                <Card style={{ border: "none" }} className="mt-4 mt-md-0 mx-0 px-3">
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
                        
                <Button className=" align-items-center resources-button m-2 mb-md-0">
                    {englishMode ? (
                        <> Ir a la Pagina
                        </>) : (
                        <> Go to Website
                        </>
                    )}
                </Button>
                    </CardBody>
                </Card>


                </CardGroup>
            </Container>


            <Container>
                <MainHeader headerText="Cool Stuff to Build and Learn" />
            </Container>
            <Container xs={12} md={4}>
                <CardGroup className="d-flex align-items-center justify-content-center flex-wrap mb-5">
                    <Card style={{ border: "none" }} className="mt-4 mt-md-0 mx-0 px-3">
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
                        
                <Button className=" align-items-center resources-button m-2 mb-md-0">
                    {englishMode ? (
                        <> Ir a la Pagina
                        </>) : (
                        <> Go to Website
                        </>
                    )}
                </Button>
                    </CardBody>
                </Card>
                <Card style={{ border: "none" }} className="mt-4 mt-md-0 mx-0 px-3">
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
                        
                <Button className=" align-items-center resources-button m-2 mb-md-0">
                    {englishMode ? (
                        <> Ir a la Pagina
                        </>) : (
                        <> Go to Website
                        </>
                    )}
                </Button>
                    </CardBody>
                </Card>

                <Card style={{ border: "none" }} className="mt-4 mt-md-0 mx-0 px-3">
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
                        
                <Button className=" align-items-center resources-button m-2 mb-md-0">
                    {englishMode ? (
                        <> Ir a la Pagina
                        </>) : (
                        <> Go to Website
                        </>
                    )}
                </Button>
                    </CardBody>
                </Card>


                </CardGroup>
            </Container>


            <Container>
                <MainHeader headerText="Typescript and Python" />
            </Container>
            <Container xs={12} md={4}>
                <CardGroup className="d-flex align-items-center justify-content-center flex-wrap mb-5">
                    <Card style={{ border: "none" }} className="mt-4 mt-md-0 mx-0 px-3">
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
                        
                <Button className=" align-items-center resources-button m-2 mb-md-0">
                    {englishMode ? (
                        <> Ir a la Pagina
                        </>) : (
                        <> Go to Website
                        </>
                    )}
                </Button>
                    </CardBody>
                </Card>
                <Card style={{ border: "none" }} className="mt-4 mt-md-0 mx-0 px-3">
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
                        
                <Button className=" align-items-center resources-button m-2 mb-md-0">
                    {englishMode ? (
                        <> Ir a la Pagina
                        </>) : (
                        <> Go to Website
                        </>
                    )}
                </Button>
                    </CardBody>
                </Card>

                <Card style={{ border: "none" }} className="mt-4 mt-md-0 mx-0 px-3">
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
                        
                <Button className=" align-items-center resources-button m-2 mb-md-0">
                    {englishMode ? (
                        <> Ir a la Pagina
                        </>) : (
                        <> Go to Website
                        </>
                    )}
                </Button>
                    </CardBody>
                </Card>


                </CardGroup>
            </Container>

        </section>
    );
}

export default ResourceDescription;

