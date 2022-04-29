import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col } from 'reactstrap';
import MainHeader from "../../../utils/MainHeader";




const CareerTest = () => {

    return (
    <Container>
    <MainHeader headerText="Don't know where to start? Take our Career Test"/>
    <Col> 
    <p>Changing careers is not easy. We know. Our Career Test is designed to help you figure out which career paths in Tech you'd be more comfortable with.</p>
    </Col>
    <Link to="/careertest" >Go to test</Link>
    </Container>
    );
  };

  

export default CareerTest;