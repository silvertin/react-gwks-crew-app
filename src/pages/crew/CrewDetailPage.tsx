import styled from 'styled-components';
import {Badge, Button, Input, ListGroup, ListGroupItem} from "reactstrap";
import Header from "../../layout/Header";
import { PageTagProps } from "../interface/PageInterface";
import NoImage from '../../assets/img/no-image-found-360x250-1-300x208.png';
import { getCrewDetail } from "../../api/CrewApi";
import React, {useState} from "react";

const CrewTitle = styled.div`
 height : 50px;
 font-size : 30px;
 margin-bottom: 10px;
`
const CrewShotExplain = styled.div`
  height : 40px;
  font-size : 18px;
  margin-bottom : 10px;
  margin-left : 10px;
`
const CrewDetailExplain = styled.div`
 height : auto;
 font-size : 15px;
 margin-bottom: 10px;
`
const CrewMemberList = styled.div`
 height : auto;
 font-size : 15px;
 margin-bottom: 10px;
`
const CrewSchedule = styled.div`
 font-size : 15px;
 margin-bottom: 20px;
`
const getClassList1 = () => {
    const list = [
        {value: 1, text: '기타'},
        {value: 2, text: '매주'},
    ]
    return list.map((item, index) => (<option key={`option${index}`} value={item.value}>{item.text}</option>));
}

const getClassList2 = () => {
    const list = [
        {value: 1, text: '기타'},
        {value: 2, text: '일요일'},
        {value: 3, text: '월요일'},
        {value: 4, text: '화요일'},
        {value: 5, text: '수요일'},
        {value: 6, text: '목요일'},
        {value: 7, text: '금요일'},
        {value: 8, text: '토요일'},
    ]
    return list.map((item, index) => (<option key={`option${index}`} value={item.value}>{item.text}</option>));
}



const CrewDetailPage = (props: PageTagProps) => {
    const [scheduleClass, setScheduleClass] = useState(1);
    const [dayClass, setDayClass] = useState(1);
    return (
        <div>
            <Header title={props.title} />
            <main>
                <CrewTitle>
                    크루명
                        <Button
                            color="danger"
                            size=""
                            variant="contained"
                            style={{float: 'right'}}
                            className="float-right"
                        >
                            신청
                        </Button>
                </CrewTitle>
                <CrewShotExplain>
                    "크루 한 줄 소개"
                </CrewShotExplain>
                <CrewDetailExplain>
                    <p> 크루 소개(상세) <br />
                        크루 상세 설명과 사진 <br />
                        <img src={NoImage}/>
                    </p>
                </CrewDetailExplain>
                <div style={{fontWeight: "bold"}}>
                    크루 멤버 리스트
                </div>
                <CrewMemberList>
                    <ListGroup flush>
                        <ListGroupItem>
                            카톡프사 이름1 (닉네임1) &nbsp;
                                <Badge color="primary">
                                    매니저
                                </Badge>
                        </ListGroupItem>
                        <ListGroupItem>
                            카톡프사 이름2 (닉네임2)
                        </ListGroupItem>
                        <ListGroupItem>
                            카톡프사 이름3 (닉네임3)
                        </ListGroupItem>
                        <ListGroupItem>
                            카톡프사 이름4 (닉네임4)
                        </ListGroupItem>
                        <ListGroupItem>
                            카톡프사 이름5 (닉네임5)
                        </ListGroupItem>
                    </ListGroup>
                </CrewMemberList>
            </main>
        </div>
    )
}

export default CrewDetailPage;
