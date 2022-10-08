import React from 'react';
import {Button, Col, Container, Row, Card, CardGroup, CardImg, CardBody, CardSubtitle } from 'reactstrap';
import {useTheme} from '../../../provider/ThemeModeProvider';
import MainHeader from '../../../utils/MainHeader';

function ResourceDescription ({...resourceData}){
    const {englishMode}= useTheme();

    return (
        <section className= "py-5">
            <Container className="mb-5" id= "twc-intro">
                <Row>
                {englishMode ? (
                        <>
                            <h1 className="resources-title"> {resourceData.titleEnglish} </h1>

                        </>
                    ) : (
                        <>
                            <h1 className="resources-title"> {resourceData.titleSpanish} </h1>

                        </>
                    )}        
                </Row>
                <Row>
                    <MainHeader
                        headerText={
                            englishMode
                                ? "General Description"
                                : "Descripcion General"
                        }
                    />
                 <Col
                        xs={12}
                        className="d-flex align-items-center justify-content-center flex-wrap mb-5"
                    >
                        <Col xs={12} md={12} className="px-0">
                            <div className="intro-img">
                                <img
                                    src={resourceData.descriptionImage}
                                    alt={resourceData.descriptionImageAltText}
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={12} className="mt-4 px-5">
                            {englishMode ? (
                                <>
                                    <p> {resourceData.resourceDescriptionEnglish} </p>

                                </>
                            ) : (
                                <>
                                    <p> {resourceData.resourceDescriptionSpanish} </p>

                                </>
                            )}
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <MainHeader
                        headerText={
                            englishMode
                                ? "Details"
                                : "Detalles"
                        }
                    />
                    <Container xs={12} md={4}>
                        <CardGroup className="d-flex align-items-center justify-content-center flex-wrap mb-5">
                            <Card style={{ border: "none" }} className="mt-4 mt-md-0 mx-0 px-3">
                            <CardImg
                                src={resourceData.book1Image}
                                alt={resourceData.descriptionImageAltText}
                                top width="100%"
                                className="card-image"/>
                            <CardBody>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6">
                                {englishMode ? (
                                    <>
                                        <p> {resourceData.detailsEnglish?.substring(0,60)}... </p>
                                    </>
                                ) : (
                                    <>
                                        <p> {resourceData.detailsSpanish?.substring(0,60)} </p>
                                    </>
                                )}

                            </CardSubtitle>
                            <Button className=" align-items-center resources-button m-2 mb-md-0">
                                    {englishMode ? (
                                    <> Go to Site
                                    </>) : (
                                    <> Ir a la Pagina
                                    </>
                                    )}
                            </Button>
                        </CardBody>
                    </Card>
                    <Card style={{ border: "none" }} className="mt-4 mt-md-0 mx-0 px-3">
                            <CardImg
                                src={resourceData.book2Image}
                                alt={resourceData.descriptionImageAltText}
                                top width="100%"
                                className="card-image"/>
                            <CardBody>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6">
                                {englishMode ? (
                                    <>
                                        <p> {resourceData.detailsEnglish2?.substring(0,60)}... </p>
                                    </>
                                ) : (
                                    <>
                                        <p> {resourceData.detailsSpanish2?.substring(0,60)} </p>
                                    </>
                                )}

                            </CardSubtitle>
                            <Button className=" align-items-center resources-button m-2 mb-md-0">
                                    {englishMode ? (
                                    <> Go to Site
                                    </>) : (
                                    <> Ir a la Pagina
                                    </>
                                    )}
                            </Button>
                        </CardBody>
                    </Card>
                    <Card style={{ border: "none" }} className="mt-4 mt-md-0 mx-0 px-3">
                            <CardImg
                                src={resourceData.book3Image}
                                alt={resourceData.descriptionImageAltText}
                                top width="100%"
                                className="card-image"/>
                            <CardBody>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6">
                                {englishMode ? (
                                    <>
                                        <p> {resourceData.detailsEnglish3?.substring(0,60)}... </p>
                                    </>
                                ) : (
                                    <>
                                        <p> {resourceData.detailsSpanish3?.substring(0,60)} </p>
                                    </>
                                )}

                            </CardSubtitle>
                            <Button className=" align-items-center resources-button m-2 mb-md-0">
                                    {englishMode ? (
                                    <> Go to Site
                                    </>) : (
                                    <> Ir a la Pagina
                                    </>
                                    )}
                            </Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </Container>
        </Row>
    </Container>
    </section>
    )
    
}

export default ResourceDescription;

