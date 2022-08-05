import React from "react";
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardImg, Container, CardGroup } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";
import MainHeader from "../../../utils/MainHeader";
import TutorialsData from "../TutorialsData";

function ResourceDescription({...resourceItem }) {
    const { englishMode } = useTheme();

    return (
        <section className="py-5">
            <Container>
                <MainHeader headerText="Our JavaScript Favorites" />
            </Container>
            <Container xs={12} md={4}>

                <CardGroup className="d-flex align-items-center justify-content-center flex-wrap mb-5">
                    {TutorialsData.map((tutorial:any,i:any)=>{
                        return (
                        <Card key={i} style={{ border: "none" }} className="mt-4 mt-md-0 mx-0 px-3">
                        <CardImg
                            alt={tutorial.descriptionImageAltText}
                            src={tutorial.image}
                            top width="100%"
                            className="card-image" />
                        <CardBody>
                            <CardTitle tag="h5">
                                {tutorial.subtitleEnglish}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6">
                                {englishMode ? (
                                    <>
                                        <p> {tutorial.DescriptionSpanish?.substring(0,60)}... </p>
                                    </>
                                ) : (
                                    <>
                                        <p> {tutorial.DescriptionEnglish?.substring(0,60)} </p>
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
                        )
                    })}
                </CardGroup>
            </Container>

        </section>
    );
}

export default ResourceDescription;

