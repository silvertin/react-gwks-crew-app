import { useEffect, useState } from "react";
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import styled from "styled-components";
import { getCrewList } from "../../api/CrewApi";
import { getUserList } from "../../api/UserApi";
import { CommunityCode } from "../../enum/OperationCode";
import Header from "../../layout/Header";
import { PageTagProps } from "../interface/PageInterface";

const CrewCart = styled(Card)`
  margin-bottom: 10px;
`

const FindCommunity = (code: number) => {
    return (CommunityCode.findById(code).text);
}

const CrewListPage = (props: PageTagProps) => {

    const [crewList, setCrewList] = useState([] as any);

    useEffect(() => {
        const fetchData = async () => {
            const crewList = await getUserList();
            setCrewList(crewList);
        }
        fetchData();
    }, []);


    return (
        <>
            <Header title={props.title} />
            <main>
                {crewList.map((item: any) => {
                    return (
                        <CrewCart>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {item.name}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {item.email}
                                </CardSubtitle>
                                <CardText>
                                    {FindCommunity(item.community)}
                                </CardText>
                            </CardBody>
                        </CrewCart>
                    )
                })}
            </main>
        </>
    )
}

export default CrewListPage;
