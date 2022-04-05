import { axiosGetRequest } from "../config/AxiosConfig";

interface Crew {
    id: number,
    name: string,
    description: string,
    create_date: string,
    meeting_type: string,
    meeting_time: string,
    meeting_limit?: string,
    community: string,
    member_limit: number,
    image?: string,
    manager: number,
    member?: null

}

export const getCrewList = async () => {
    // const result = await axiosGetRequest(`http://20.214.185.3/apis/crew/`, {});
    // return result.data;
    return [
        {
            "id": 2,
            "name": "WALK THE TALK1",
            "abstract": "세빛영, 믿음의 도전으로 \"세상의 이슈\"를 함께 고민해보고, 그 고민을 행동으로 실천 해보는 모임 입니다.",
            "description": "<p>WALK THE TALK 은 언행일치를 의미합니다.</p>\r\n\r\n<p>생각으로만, 말로만 하지말고 &#39;뭐라도 해보자&#39;라는 의미로 만든 크루입니다.</p>\r\n\r\n<p>청년마을의 &#39;청년개발 사역&#39;을 활용한 사역 활동도 같이 고민해 보려 합니다.</p>\r\n\r\n<p>많은 참여 바랍니다 :)</p>",
            "create_date": "04/05/2022 10:28pm",
            "meeting_type": "오프라인",
            "meeting_time": "수요일 저녁 18-21시",
            "meeting_limit": "오프라인으로 낯선 이들 식사, 카페 모임이 불편하신 분",
            "community": "1청년부",
            "member_limit": 6,
            "image": null,
            "manager": 12,
            "members": [
                12
            ]
        },
        {
            "id": 1,
            "name": "모두를 위한 성경읽기2",
            "abstract": "공동체를 위해 같이 성경읽고 나누는 모임입니다.",
            "description": "<h2>모임소개</h2>\r\n\r\n<p>모두를 위한 성경읽기 크루는 매주 성경을 읽고 느낀 바를 나누는 온라인 모임입니다.</p>\r\n\r\n<p>이번 크루를 통해서는</p>\r\n\r\n<ul>\r\n\t<li>나를 위해</li>\r\n\t<li>공동체를 위해</li>\r\n\t<li>사회 공의와 정의를 위해</li>\r\n\t<li>환경을 위해</li>\r\n\t<li>소수가 된 이들을 위해 성경을 같이 읽고 나눠보고 싶습니다.</li>\r\n</ul>\r\n\r\n<h2>준비물</h2>\r\n\r\n<p>성경읽기에 앞서 책한권을 북스터디 하고 읽을예정입니다.<br />\r\n<strong>(나를 넘어서는 성경읽기 - 성서유니온, 김근주) &rarr; #구매해서 02/09전까지 읽어주세요~! 184쪽!</strong></p>\r\n\r\n<p><a href=\"http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&amp;mallGb=KOR&amp;barcode=9788932521220&amp;orderClick=LAG&amp;Kc=\">나를 넘어서는 성경읽기 - 교보문고</a></p>\r\n\r\n<h2>일정</h2>\r\n\r\n<p>매주 수요일 늦은 9시 Zoom에서 봅니다.</p>\r\n\r\n<p>&nbsp;</p>",
            "create_date": "03/28/2022 07:43pm",
            "meeting_type": "온라인",
            "meeting_time": "매주 수요일 오후 9시",
            "meeting_limit": "없습니다.",
            "community": "신혼브릿지",
            "member_limit": 9,
            "image": "http://20.214.185.3/media/crew/resize/220405/l9788932521220.jpeg",
            "manager": 2,
            "members": [
                2,
                11
            ]
        },
        {
            "id": 2,
            "name": "WALK THE TALK3",
            "abstract": "세빛영, 믿음의 도전으로 \"세상의 이슈\"를 함께 고민해보고, 그 고민을 행동으로 실천 해보는 모임 입니다.",
            "description": "<p>WALK THE TALK 은 언행일치를 의미합니다.</p>\r\n\r\n<p>생각으로만, 말로만 하지말고 &#39;뭐라도 해보자&#39;라는 의미로 만든 크루입니다.</p>\r\n\r\n<p>청년마을의 &#39;청년개발 사역&#39;을 활용한 사역 활동도 같이 고민해 보려 합니다.</p>\r\n\r\n<p>많은 참여 바랍니다 :)</p>",
            "create_date": "04/05/2022 10:28pm",
            "meeting_type": "오프라인",
            "meeting_time": "수요일 저녁 18-21시",
            "meeting_limit": "오프라인으로 낯선 이들 식사, 카페 모임이 불편하신 분",
            "community": "1청년부",
            "member_limit": 6,
            "image": null,
            "manager": 12,
            "members": [
                12
            ]
        },
        {
            "id": 1,
            "name": "모두를 위한 성경읽기4",
            "abstract": "공동체를 위해 같이 성경읽고 나누는 모임입니다.",
            "description": "<h2>모임소개</h2>\r\n\r\n<p>모두를 위한 성경읽기 크루는 매주 성경을 읽고 느낀 바를 나누는 온라인 모임입니다.</p>\r\n\r\n<p>이번 크루를 통해서는</p>\r\n\r\n<ul>\r\n\t<li>나를 위해</li>\r\n\t<li>공동체를 위해</li>\r\n\t<li>사회 공의와 정의를 위해</li>\r\n\t<li>환경을 위해</li>\r\n\t<li>소수가 된 이들을 위해 성경을 같이 읽고 나눠보고 싶습니다.</li>\r\n</ul>\r\n\r\n<h2>준비물</h2>\r\n\r\n<p>성경읽기에 앞서 책한권을 북스터디 하고 읽을예정입니다.<br />\r\n<strong>(나를 넘어서는 성경읽기 - 성서유니온, 김근주) &rarr; #구매해서 02/09전까지 읽어주세요~! 184쪽!</strong></p>\r\n\r\n<p><a href=\"http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&amp;mallGb=KOR&amp;barcode=9788932521220&amp;orderClick=LAG&amp;Kc=\">나를 넘어서는 성경읽기 - 교보문고</a></p>\r\n\r\n<h2>일정</h2>\r\n\r\n<p>매주 수요일 늦은 9시 Zoom에서 봅니다.</p>\r\n\r\n<p>&nbsp;</p>",
            "create_date": "03/28/2022 07:43pm",
            "meeting_type": "온라인",
            "meeting_time": "매주 수요일 오후 9시",
            "meeting_limit": "없습니다.",
            "community": "신혼브릿지",
            "member_limit": 9,
            "image": "http://20.214.185.3/media/crew/resize/220405/l9788932521220.jpeg",
            "manager": 2,
            "members": [
                2,
                11
            ]
        },
        {
            "id": 1,
            "name": "모두를 위한 성경읽기5",
            "abstract": "공동체를 위해 같이 성경읽고 나누는 모임입니다.",
            "description": "<h2>모임소개</h2>\r\n\r\n<p>모두를 위한 성경읽기 크루는 매주 성경을 읽고 느낀 바를 나누는 온라인 모임입니다.</p>\r\n\r\n<p>이번 크루를 통해서는</p>\r\n\r\n<ul>\r\n\t<li>나를 위해</li>\r\n\t<li>공동체를 위해</li>\r\n\t<li>사회 공의와 정의를 위해</li>\r\n\t<li>환경을 위해</li>\r\n\t<li>소수가 된 이들을 위해 성경을 같이 읽고 나눠보고 싶습니다.</li>\r\n</ul>\r\n\r\n<h2>준비물</h2>\r\n\r\n<p>성경읽기에 앞서 책한권을 북스터디 하고 읽을예정입니다.<br />\r\n<strong>(나를 넘어서는 성경읽기 - 성서유니온, 김근주) &rarr; #구매해서 02/09전까지 읽어주세요~! 184쪽!</strong></p>\r\n\r\n<p><a href=\"http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&amp;mallGb=KOR&amp;barcode=9788932521220&amp;orderClick=LAG&amp;Kc=\">나를 넘어서는 성경읽기 - 교보문고</a></p>\r\n\r\n<h2>일정</h2>\r\n\r\n<p>매주 수요일 늦은 9시 Zoom에서 봅니다.</p>\r\n\r\n<p>&nbsp;</p>",
            "create_date": "03/28/2022 07:43pm",
            "meeting_type": "온라인",
            "meeting_time": "매주 수요일 오후 9시",
            "meeting_limit": "없습니다.",
            "community": "신혼브릿지",
            "member_limit": 9,
            "image": "http://20.214.185.3/media/crew/resize/220405/l9788932521220.jpeg",
            "manager": 2,
            "members": [
                2,
                11
            ]
        }
    ];
}
