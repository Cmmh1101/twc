import React from 'react';
import {Button, Col, Container, Row } from 'reactstrap';
import {useTheme} from '../../../provider/ThemeModeProvider';
import MainHeader from '../../../utils/MainHeader';


//maybe here I can modify the format using Cardgroup?//

function ResourceDescription ({...resourceData}){
    const {englishMode}= useTheme();

    return (
        <section className= "py-5">
            <Container className="mb-5" id= "twc-intro">
                <Row>
                {englishMode ? (
                        <>
                            <h1 className="resources-title"> {resourceData.titleSpanish} </h1>

                        </>
                    ) : (
                        <>
                            <h1 className="resources-title"> {resourceData.titleEnglish} </h1>

                        </>
                    )}        
                </Row>
                <Row>
                    <MainHeader
                        headerText={
                            englishMode
                                ? "Descripcion General"
                                : "General Description"
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
                                    <p> {resourceData.resourceDescriptionSpanish} </p>

                                </>
                            ) : (
                                <>
                                    <p> {resourceData.resourceDescriptionEnglish} </p>

                                </>
                            )}
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <MainHeader
                        headerText={
                            englishMode
                                ? "Detalles"
                                : "Details"
                        }
                    />
                    <Col
                        xs={12}
                        className="d-flex align-items-center justify-content-center flex-wrap mb-5"
                    >
                        <Col xs={12} md={5} className="px-0">
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
                                    <p> {resourceData.detailsSpanish} </p>

                                </>
                            ) : (
                                <>
                                    <p> {resourceData.detailsEnglish} </p>

                                </>
                            )}
                        </Col>
                    </Col>
                </Row>
                <Row>
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
    )
    
}

export default ResourceDescription;

