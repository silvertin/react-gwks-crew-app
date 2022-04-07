import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import NoImage from '../../assets/img/no-image-found-360x250-1-300x208.png'

const CustomCard = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
  border: 1px;
  border-style: solid;
  border-color: grey;
  .title {
    width: 100%;
    padding: 5px;
    background-color: rgba(108, 117, 125, 0.8);
    color: #FFF;
  }
  .desc {
    width: 100%;
    padding: 5px;
    position: absolute;
    bottom: 0px;
    background-color: rgba(108, 117, 125, 0.4);
    font-size: 15px;
  }
`

const CrewList = (props: any) => {

    const list = [];
    let i = 0;

    while(i < props.crewList.length) {
        const coupleList = [] as any;
        if (props.crewList[i] != null) {
            coupleList[0] = (
                <Col key={props.crewList[i]}>
                    <CustomCard style={
                        {
                            "backgroundImage": `url(${props.crewList[i].image || NoImage})`,
                        }}
                    >
                        <div className={"title"}>
                            <Link to={`/crew_detail?id=${props.crewList[i].id}`}>{props.crewList[i].name}</Link>
                        </div>
                        <div className={"desc"}>
                            {props.crewList[i].abstract}
                        </div>
                    </CustomCard>
                </Col>
            );
        }
        i++;
        if (props.crewList[i] != null) {
            coupleList[1] = (
                <Col key={props.crewList[i]}>
                    <CustomCard style={
                        {
                            "backgroundImage": `url(${props.crewList[i].image_thumbnail || NoImage})`,
                        }}
                    >
                        <div className={"title"}>
                            <Link to={`/crew_detail?id=${props.crewList[i].id}`}>{props.crewList[i].name}</Link>
                        </div>
                        <div className={"desc"}>
                            {props.crewList[i].abstract}
                        </div>
                    </CustomCard>
                </Col>
            );
        }
        list.push(coupleList);
        i++;
    }

    return (
        <>
            {
                list.map(item => {
                    return (
                        <Row xs={2} className={"cardRow"}>
                            {item}
                        </Row>
                    )
                })
            }
        </>
    )
}

export default CrewList;
