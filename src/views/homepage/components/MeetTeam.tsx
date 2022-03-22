import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

const MeetTeam = () => {
    return (
        <>
            <h1 className="MeetTheTeam">Meet the Team</h1>
            <CardDeck>

                <Card className="teamCard">
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" className="pict" alt="Card image cap" />
                    <CardBody className="cardBody">
                        <CardTitle className="teamMember">Clara Harmonson</CardTitle>
                        <CardSubtitle className="jobTitle">Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button className="BtnTeam">Contact Clara</Button>
                    </CardBody >
                </Card>
                <Card className="teamCard">
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" className="pict" alt="Card image cap" />
                    <CardBody className="cardBody">
                        <CardTitle className="teamMember">Marilyn Marquez</CardTitle>
                        <CardSubtitle className="jobTitle">Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button className="BtnTeam">Contact Marilyn</Button>
                    </CardBody>
                </Card>
                <Card className="teamCard">
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" className="pict" alt="Card image cap" />
                    <CardBody className="cardBody">
                        <CardTitle className="teamMember">Carla Montano</CardTitle>
                        <CardSubtitle className="jobTitle">Web Developer</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button className="BtnTeam">Contact Carla</Button>
                    </CardBody>
                </Card>
                <Card className="teamCard">
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" className="pict" alt="Card image cap" />
                    <CardBody className="cardBody">
                        <CardTitle className="teamMember">Allie Pistolessi</CardTitle>
                        <CardSubtitle className="jobTitle">Web Developer</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button className="BtnTeam">Contact Allison</Button>
                    </CardBody>
                </Card>
                <Card className="teamCard">
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" className="pict" alt="Card image cap" />
                    <CardBody className="cardBody">
                        <CardTitle className="teamMember">Michael Rivera</CardTitle>
                        <CardSubtitle className="jobTitle">Web Developer</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button className="BtnTeam">Contact Michael</Button>
                    </CardBody >
                </Card>
            </CardDeck>

        </>
    );
}

export default MeetTeam;