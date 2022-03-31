import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import styled from "styled-components";
import { PageTagProps } from "./interface/PageInterface";

const CrewCart = styled(Card)`
  margin-bottom: 10px;
`

const CrewListPage = (props: PageTagProps) => {
    return (
        <>
            <header>
                <h3>{props.title}</h3>
            </header>
            <main>
                <CrewCart>
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </CrewCart>
                <CrewCart>
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </CrewCart>
                <CrewCart>
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </CrewCart>
                <CrewCart>
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </CrewCart>
            </main>
        </>
    )
}

export default CrewListPage;
