import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaYoutube} from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";


const Footer = () => {
  return <footer className="footer" >
    <Container fluid>
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
        <h4 className="footer-title" > Site Map </h4>
          <ul className="list-unstyled">
            <li>Home</li>
            <li>Path</li> 
            <li>Resources</li> 
            <li>Blog</li> 
            <li>FAQ</li>  
          </ul>
        </Col>
      
        <Col md={3} xs={12} className= 'mt-4'>
           <h4 className="footer-title"> Follow Us </h4>
           <ul className="list-unstyled">
            <li>
            <FaGithub size= "2em" /> <FaLinkedin size= "2em"/> <FaYoutube size= "2em"/></li>            
          </ul>     
          
        </Col>
      </Row>
    </Container>

    </footer>;
};

export default Footer;
