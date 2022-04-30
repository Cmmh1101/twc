import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, Input, FormGroup, Label, CardTitle, Card, CardBody, Col, Button, Form } from 'reactstrap';
import { questionsData } from './components/questionsData';
//This is Michael's file
//these items should be our questions? Should this be questiondata from CareerTest/careertest? or the Questioncard?:

class HeroCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === questionsData.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? questionsData.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = questionsData.map((question, i) => {
            return (
                <CarouselItem 
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={i}
                >
                <Card className="bg-info">
                <CardTitle>
                {question.Question}
                </CardTitle>
                <CardBody className='bg-info'>
                <Form>
                <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option a: {question.answerA}
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option b: {question.answerB}
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option c:{question.answerC}
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option d:{question.answerD}
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option e: {question.answerE}
            </Label>
          </FormGroup>
                </Form>
                </CardBody>
          <Col>     
          </Col>
            </Card>
            
                </CarouselItem>
            );
        });

        return (
            <>
                <div style={{
                    height: '60px'
                }}></div>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    interval = {null} //stops autoplay
                >
                    {slides}

                 {/* <CarouselControl
                    className='primary'
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={this.previous}
                    />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={this.next} 
                    /> */}

                     <Button className="resources-button mb-5 mb-md-0 mx-auto"
                    direction="prev"
                    directionText="Previous"
                    onClick={this.previous}
                    style = {{marginRight:'20px'}}
                    >
                    Previous Question
                   </Button> 
                   <Button className="resources-button mb-5 mb-md-0 mx-auto"
                    direction="next"
                    directionText="Next"
                    onClick={this.next}
                    style = {{display: 'flex', float:'right'}}>
                    Next Question
                   </Button>
                        
                    
                </Carousel>
            </>
        );
    }
}
export default HeroCarousel;