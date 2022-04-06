import { PageTagProps } from "../interface/PageInterface";
import Header from "../../layout/Header";
import styled from "styled-components";
import { getCrewList } from "../../api/CrewApi";
import { useEffect, useState } from "react";
import CrewList from "../../components/home/CrewList";

const RowWrapper =  styled.div`
  .cardRow {
    margin-bottom: 10px;
  }
`

const HomePage = (props: PageTagProps) => {
    let [list, setList] = useState([] as any);
    useEffect(() => {
        const fetchData = async function () {
            const result = await getCrewList();
            setList(result);
        };
        fetchData();
    }, []);
    return (
        <>
            <Header title={props.title} />
            <main>
                <RowWrapper>
                    <CrewList crewList={list} />
                </RowWrapper>
            </main>
        </>
    )
}

export default HomePage;
