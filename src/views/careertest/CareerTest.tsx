import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col, Card, Row, CardTitle, CardBody } from 'reactstrap';
import MainHeader from '../../utils/MainHeader';
import HeroCarousel from './carousel'




const CareerTest = () => {
const questionsData = [
    {Question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    answerA:'A',
    answerB:'B',
    answerC:'C',
    answerD: 'D',
    answerE: 'E'
},   
    {Question: 'Eius repudiandae temporibus sapiente repellat sunt, inventore sit suscipit',
    answerA:'A',
    answerB:'B',
    answerC:'C',
    answerD: 'D',
    answerE: 'E'
},
    {Question: 'Laboriosam, natus a?',
    answerA:'A',
    answerB:'B',
    answerC:'C',
    answerD: 'D',
    answerE: 'E'
},
    {Queston: 'Qui praesentium quas est illum illo assumenda inventore eius dolor',

    answerA:'A',
    answerB:'B',
    answerC:'C',
    answerD: 'D',
    answerE: 'E'},

    {Question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    answerA:'A',
    answerB:'B',
    answerC:'C',
    answerD: 'D',
    answerE: 'E'
},   
    {Question: 'Eius repudiandae temporibus sapiente repellat sunt, inventore sit suscipit',
    answerA:'A',
    answerB:'B',
    answerC:'C',
    answerD: 'D',
    answerE: 'E'
},
    {Question: 'Laboriosam, natus a?',
    answerA:'A',
    answerB:'B',
    answerC:'C',
    answerD: 'D',
    answerE: 'E'
},
    {Queston: 'Qui praesentium quas est illum illo assumenda inventore eius dolor',
    answerA:'A',
    answerB:'B',
    answerC:'C',
    answerD: 'D',
    answerE: 'E'
},
    {Question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    answerA:'A',
    answerB:'B',
    answerC:'C',
    answerD: 'D',
    answerE: 'E'
},   
    {Question: 'Eius repudiandae temporibus sapiente repellat sunt, inventore sit suscipit',
    answerA:'A',
    answerB:'B',
    answerC:'C',
    answerD: 'D',
    answerE: 'E'
},
]
    return (
    <Container>
    <MainHeader headerText="Quiz"/>
    <Row>
        <Col>
        <HeroCarousel />
        </Col>

    </Row>
    </Container>
    );
  };

  

export default CareerTest;