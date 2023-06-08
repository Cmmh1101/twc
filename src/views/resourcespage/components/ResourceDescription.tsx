import { Col, Container, Row, Card } from "reactstrap";
import MainHeader from "../../../utils/MainHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { useResources } from "../../../provider/ResourcesProvider";
import LoadingComponent from "../../../utils/LoadingComponent";

const ResourceDescription = ({ ...resourceTab }) => {
  const {loading} = useResources()

  const flatData: any = Object.values(resourceTab);

  if (loading) {
    return <LoadingComponent />
  }

  return (
      <Container className="mb-5" id="twc-intro">
        <Row>
          <Col xs={12}>
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
                return (
                  <Card key={i} className="resources-box col-12 col-md-5 col-lg-5 p-3 my-2 shadow">
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
                    {item.tag !== "" && (
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
                    )}

                    <a href={item.url}>Go to resource page</a>
                  </Card>
                );
              // }
            })}
          </Col>
          <Row>
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center flex-wrap mb-5"
            >
              
            </Col>
          </Row>
        </Row>
        <Row>
          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center flex-wrap mb-5"
          >
          </Col>
        </Row>
      </Container>
  );
}

export default ResourceDescription;
