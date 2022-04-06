import React, {useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button, FormGroup, FormText, Input, Label } from "reactstrap";
import styled from "styled-components";
import { StorageUtil } from "../../config/BrowserUtil";
import Header from "../../layout/Header";
import JoinService from "../../service/join/JoinService";
import { PageTagProps } from "../interface/PageInterface";

const SignUpWrapper = styled.div`
  padding: 50px 30px;
`

const getClassList = () => {
    const list = [
        {value: 1, text: '1청년부'},
        {value: 2, text: '2청년부'},
        {value: 3, text: '3청년부'},
        {value: 4, text: '신혼브릿지'},
        {value: 5, text: '기타'}
    ]
    return list.map((item, index) => (<option key={`option${index}`} value={item.value}>{item.text}</option>));
}

const SignUpPage = (props: PageTagProps) => {
    const email = StorageUtil.local.getItem("email") || null;
    const [userEmail, setUserEmail] = useState(email as any);
    const [userName, setUserName] = useState("");
    const [userClass, setUserClass] = useState(1);
    const [userAgeBoundary, setUserAgeBoundary] = useState("");
    const [nickName, setNickName] = useState("");

    const DoCancelJoin = () => {
        if (window.confirm("가입을 취소하시겠습니다?😥 \n괜찮아요, 다시 가입할수 있어요")) {
            window.location.replace("/");
        }
    };

    const DoAgreeJoin = () => {
        const joinService = new JoinService();
        const user = {userEmail, userName, userClass, userAgeBoundary, nickName};
        const isAccess = joinService.doValidation(user);
        if (isAccess) {
            if (window.confirm("가입을 승인하시겠습니다?")) {
                alert("통신함!");
            }
        }
    }
    return (
        <React.Fragment>
            <Header title={props.title} />
            <main>
                <div>
                    <p style={{"marginTop": "50px"}}>
                        청년마을 크루앱을 사용하기 위한 회원가입을 진행해주세요.
                    </p>
                    <SignUpWrapper>
                        <FormGroup>
                            <Label for="userEmail">
                                아이디
                            </Label>
                            <Input
                                id="userEmail"
                                name="email"
                                value={userEmail}
                                onChange={e => setUserEmail(e.target.value)}
                                placeholder="이메일을 입력하여 주세요."
                                disabled
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="userName">
                                이름
                            </Label>
                            <Input
                                id="userName"
                                name="name"
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                                placeholder="이름을 입력해주세요."
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="userClass">
                                소속 공동체
                            </Label>
                            <Input
                                id="userClass"
                                name="class"
                                type="select"
                                value={userClass}
                                onChange={e => setUserClass(Number(e.target.value))}
                            >
                                {getClassList()}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="userName">
                                또래
                            </Label>
                            <Input
                                id="userName"
                                name="name"
                                value={userAgeBoundary}
                                onChange={e => setUserAgeBoundary(e.target.value)}
                                placeholder="또래를 입력해주세요."
                            />
                            <FormText>
                                나이나 수준이 서로 비슷한 무리. ex) 90년또래 {"->"} 90
                            </FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label for="userNickName">
                                닉네임
                            </Label>
                            <Input
                                id="userNickName"
                                name="nickName"
                                value={nickName}
                                onChange={e => setNickName(e.target.value)}
                                placeholder="닉네임을 입력해주세요."
                            />
                        </FormGroup>
                        <div style={{"textAlign": "center", "marginTop": "50px"}}>
                            <Button onClick={ e => DoCancelJoin()} style={{"width": "130px"}}> 취소 </Button>
                            &emsp;&emsp;
                            <Button onClick={e => DoAgreeJoin()} style={{"width": "130px"}} color={"primary"}> 가입하기 </Button>
                        </div>
                    </SignUpWrapper>
                </div>
            </main>
        </React.Fragment>
    )
}

export default SignUpPage;
