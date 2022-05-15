import React from 'react'
import {Card, CardBody} from 'reactstrap';

interface Props {
  image: string;
  title: string;
  description: string;
  link?: string;
}

/*to add properties in TS use {}and :Props, see example below*/
const CardItem =({image, title, description}: Props) => {
  return (
    <div 
      className= "d-flex align-items-center"
      style={{width: "100vw", height: "100vh"}}>
          <Card>
              <CardBody>
                <img src={image} alt={''}/>
                <h2>{title}</h2>
                <h2>{description}</h2>
              </CardBody>
          </Card>
    </div>
  )
};

export default CardItem;