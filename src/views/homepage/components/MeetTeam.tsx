import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

const MeetTeam = () => {
    return (
        <>
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" class="pict" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Clara Harmonson</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Contact Clara</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" class="pict" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Marilyn Marquez</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Contact Marilyn</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" class="pict" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Carla Montano</CardTitle>
                        <CardSubtitle>Web DEveloper</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Contact Carla</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"  class="pict" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Allison Pistorelli</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Contact Allison</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" class="pict" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Michael Rivera</CardTitle>
                        <CardSubtitle>Web Developer</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Contact Michael</Button>
                    </CardBody>
                </Card>
            </CardDeck>
            

        </>
    );
}

export default MeetTeam;