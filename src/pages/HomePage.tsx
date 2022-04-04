import { Swiper, SwiperSlide } from "swiper/react";
import { PageTagProps } from "./interface/PageInterface";
import Header from "../layout/Header";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Row, Col } from "reactstrap";
import styled from "styled-components";

const RowWrapper =  styled.div`
  .cardRow {
    margin-bottom: 10px;
  }
`

const HomePage = (props: PageTagProps) => {
    return (
        <>
            <Header title={props.title} />
            <main>
                <RowWrapper>
                    <Row xs={2} className={"cardRow"}>
                        <Col>
                            <Card>
                                <img
                                    alt="Card image cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardText>
                                        Some quick
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <img
                                    alt="Card image cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardText>
                                        신혼 브릿지
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row xs={2} className={"cardRow"}>
                        <Col>
                            <Card>
                                <img
                                    alt="Card image cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardText>
                                        Some quick
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <img
                                    alt="Card image cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardText>
                                        신혼 브릿지
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row xs={2} className={"cardRow"}>
                        <Col>
                            <Card>
                                <img
                                    alt="Card image cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardText>
                                        Some quick
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <img
                                    alt="Card image cap"
                                    src="https://picsum.photos/318/180"
                                    width="100%"
                                />
                                <CardBody>
                                    <CardText>
                                        신혼 브릿지
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </RowWrapper>
            </main>
        </>
    )
}

export default HomePage;
