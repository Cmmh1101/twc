import React from 'react'
import {Container, Card, CardBody, Row, Col} from 'reactstrap';




interface Props {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const CardItem =({image, title, description}: Props) => {

  return (
   
      <Container>
        <Row >
          <Col xs={12} 
          className="d-flex align-items-center justify-content-center flex-wrap">
            <Card>
              <CardBody>
              <h1>{title}</h1>
              <img src={image} alt={''}/>
              <h2>{description}</h2>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </Container>

  )
};

export default CardItem;