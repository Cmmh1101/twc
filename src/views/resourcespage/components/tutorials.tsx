
import React from "react";
import { Button, Col, Container, Row, CardBody } from "reactstrap";

import { useTheme } from "../../../provider/ThemeModeProvider";
import MainHeader from "../../../utils/MainHeader";
import Card from "../components/Card";

interface Props { }


const Tutorials = (props: Props) => {
    const { englishMode } = useTheme();
    return (
        <section className="py-5">
            <Container >

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
                        className="d-flex align-items-center justify-content-center flex-wrap"
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
                        <Card/>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
};

export default Tutorials;