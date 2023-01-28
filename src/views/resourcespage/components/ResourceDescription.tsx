import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";
import MainHeader from "../../../utils/MainHeader";
import { ResourceData, Resources } from "../../../interfaces/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";

function ResourceDescription({ ...resourceTab }) {
  const [newResource, setNewResource] = useState();

  //   console.log(Object.values(resourceTab), "values");
  //   const data = resourceData;
  //   const resources: any = [];
  //   for (const key in data) {
  //     resources.push({
  //       id: key,
  //       ...data[key],
  //     });
  //   }

  //   useEffect(() => {
  //     const flatData: any = Object.values(resourceTab);
  //     setNewResource(flatData);
  //   }, [resourceTab]);

  const flatData: any = Object.values(resourceTab);
  console.log(flatData, "obj");

  return (
    <section className="py-5">
      <Container className="mb-5" id="twc-intro">
        <Row>
          <Col xs={12}>
            {/* <h1 className="resources-title"> {resourceTab.id}</h1> */}
            <MainHeader
              headerText={resourceTab.id}
              customClass="text-capitalize"
            />
          </Col>
          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center flex-wrap"
          >
            {flatData.map((item: any, i: any) => {
              if (item.title || item.url) {
                return (
                  <Card key={i} className="resources-box p-3 my-2 shadow">
                    <h4 className="mb-0">{item.title}</h4>
                    {item.author !== "" && (
                      <p className="text-primary mt-2 mb-0">By {item.author}</p>
                    )}
                    <hr className="my-2" />
                    {item.description && (
                      <p>{item.description.substring(0, 120)}</p>
                    )}
                    <dl className="d-flex text-capitalize">
                      <dt>Category:</dt>
                      <dd className="ml-2">{item.category}</dd>
                    </dl>
                    <div className="resource-tag mb-3">
                      {item.tag === "paid" ? (
                        <>
                          <FontAwesomeIcon icon={faDollar} />
                          <FontAwesomeIcon icon={faDollar} />
                        </>
                      ) : (
                        item.tag === "free" && "Free"
                      )}
                    </div>
                    <a href={item.url}>Go to resource page</a>
                  </Card>
                );
              }
            })}
          </Col>
          <Row>
            {/* <MainHeader headerText={"General Description"} /> */}
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center flex-wrap mb-5"
            >
              {/* <Col xs={12} md={12} className="px-0">
              <div className="intro-img">
                <img
                  src={resourceTab.descriptionImage}
                  alt={resourceTab.descriptionImageAltText}
                />
              </div>
            </Col> */}
              {/* <Col xs={12} md={12} className="mt-4 px-5">
                <p> {resourceTab.description} </p>
              </Col> */}
            </Col>
          </Row>

          {/* {resourceData} */}
          {/* {englishMode ? (
            <>
              <h1 className="resources-title"> {resourceData.titleEnglish} </h1>
            </>
          ) : (
            <>
              <h1 className="resources-title"> {resourceData.titleSpanish} </h1>
            </>
          )} */}
        </Row>
        <Row>
          {/* <MainHeader headerText={"General Description"} /> */}
          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center flex-wrap mb-5"
          >
            {/* <Col xs={12} md={12} className="px-0">
              <div className="intro-img">
                <img
                  src={resourceTab.descriptionImage}
                  alt={resourceTab.descriptionImageAltText}
                />
              </div>
            </Col> */}
            {/* <Col xs={12} md={12} className="mt-4 px-5">
              <p> {resourceTab.description} </p>
            </Col> */}
          </Col>
        </Row>
        {/* <Row>
          <MainHeader headerText={"Details"} />
          <Container xs={12} md={4}>
            <CardGroup className="d-flex align-items-center justify-content-center flex-wrap mb-5">
              <Card
                style={{ border: "none" }}
                className="mt-4 mt-md-0 mx-0 px-3"
              >
                <CardImg
                  src={resourceData.descriptionImage}
                  alt={resourceData.descriptionImageAltText}
                  top
                  width="100%"
                  className="card-image"
                />
                <CardBody>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    <p> {resourceData.detailsEnglish?.substring(0, 60)}... </p>
                  </CardSubtitle>
                  <Button className=" align-items-center resources-button m-2 mb-md-0">
                    Go to Site
                  </Button>
                </CardBody>
              </Card>
              <Card
                style={{ border: "none" }}
                className="mt-4 mt-md-0 mx-0 px-3"
              >
                <CardImg
                  src={resourceData.descriptionImage}
                  alt={resourceData.descriptionImageAltText}
                  top
                  width="100%"
                  className="card-image"
                />
                <CardBody>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    <p> {resourceData.detailsEnglish2?.substring(0, 60)}... </p>
                  </CardSubtitle>
                  <Button className=" align-items-center resources-button m-2 mb-md-0">
                    Go to Site
                  </Button>
                </CardBody>
              </Card>
              <Card
                style={{ border: "none" }}
                className="mt-4 mt-md-0 mx-0 px-3"
              >
                <CardImg
                  src={resourceData.descriptionImage}
                  alt={resourceData.descriptionImageAltText}
                  top
                  width="100%"
                  className="card-image"
                />
                <CardBody>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    <p> {resourceData.detailsEnglish3?.substring(0, 60)}... </p>
                  </CardSubtitle>
                  <Button className=" align-items-center resources-button m-2 mb-md-0">
                    Go to Site
                  </Button>
                </CardBody>
              </Card>
            </CardGroup>
          </Container>
        </Row> */}
      </Container>
    </section>
  );
}

export default ResourceDescription;
