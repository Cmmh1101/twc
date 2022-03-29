import React from "react";
import { Button, Col, Container, Row } from "reactstrap";


const Footer = () => {
  return <footer>
    <Container>
      <Row>
        <Col
         md={5} xs={12}
         className="d-flex align-items-center 
         justify-content-center flex-wrap">
          <div className="footer-img">
            <img 
            src="/logo.png"
            className="footer-image"
            height="200"
            width="200"
            alt="Teachers Who Code Logo"
            />
          </div>  
        </Col>
        <Col md={3} xs={12} className= 'mt-4'>
        <h4 > Site Map </h4>
        <ul className="list-unstyled">
            <li>Home</li>
            <li>Path</li> 
            <li>Resources</li> 
            <li>Blog</li> 
            <li>FAQ</li>  
           </ul>
        </Col>
      
        <Col md={3} xs={12} className= 'mt-4'>
           <h4> Contact Us </h4>
           <Button className="mt-4 mb-3 mt-md-0 mx-0 px-4">
             Send
           </Button>
           <p>email</p>
        </Col>
      </Row>
    </Container>

    </footer>;
};

export default Footer;
