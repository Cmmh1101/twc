import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col } from 'reactstrap';
import MainHeader from "../../../utils/MainHeader";




const CareerTest = () => {

    return (
    <Container>
    <MainHeader headerText="Don't know where to start? Take our Career Test"/>
    <Col> 
    <p>Changing careers is not easy. We know. Our Career Test is designed to help you figure out which career paths in Tech you'd be more comfortable with.</p>
    </Col>
      <Form>
        <FormGroup tag="fieldset">
          <legend>Question 1</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option a: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option b: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1"  />{' '}
              Option c: 
            </Label>
          </FormGroup> <br />

          <FormGroup tag="fieldset">
          <legend>Question 2</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option a: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option b: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1"  />{' '}
              Option c:
            </Label>
          </FormGroup> <br />

          <FormGroup tag="fieldset">
          <legend>Question 3</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option a: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option b: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1"  />{' '}
              Option c: 
            </Label>
          </FormGroup> <br />
          
          <FormGroup tag="fieldset">
          <legend>Question 4</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option a: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option b: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1"  />{' '}
              Option c: 
            </Label>
          </FormGroup>
          <FormGroup tag="fieldset">
          <legend>Question 5</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option a: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option b: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1"  />{' '}
              Option c: 
            </Label>
          </FormGroup> <br />
          <FormGroup tag="fieldset">
          <legend>Question 6</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option a:
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option b:
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1"  />{' '}
              Option c:
            </Label>
          </FormGroup> <br />
          <FormGroup tag="fieldset">
          <legend>Question 7</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option a: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option b: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1"  />{' '}
              Option c: 
            </Label>
          </FormGroup> <br />
          <FormGroup tag="fieldset">
          <legend>Question 8</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option a: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option b: 
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1"  />{' '}
              Option c:
            </Label>
          </FormGroup>
          <FormGroup tag="fieldset">
          <legend>Question 9</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option a: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option b: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1"  />{' '}
              Option c: 
            </Label>
          </FormGroup> <br />
          <FormGroup tag="fieldset">
          <legend>Question 10</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option a: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option b: 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1"  />{' '}
              Option c:
            </Label>
          </FormGroup>
           <br />

        <Button className="resources-button mb-5 mb-md-0 mx-auto">Submit</Button>
        </FormGroup>
        </FormGroup>
        </FormGroup>
        </FormGroup>
        </FormGroup>
        </FormGroup>
        </FormGroup>
        </FormGroup>
        </FormGroup>
        </FormGroup>
      </Form>
    </Container>
    );
  };

  

export default CareerTest;