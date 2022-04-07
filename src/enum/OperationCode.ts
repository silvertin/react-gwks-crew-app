export interface CommunityCodeModel {
    value: number,
    text: string
}
export const CommunityCode = {
    list: [
        {value: 0, text: "1 청년부"},
        {value: 1, text: "2 청년부"},
        {value: 2, text: "3 청년부"},
        {value: 3, text: "신혼BR"},
        {value: 4, text: "기타"}
    ],
    findById: (id: number): CommunityCodeModel => {
        let find = CommunityCode.list.find(item => item.value == id);
        if (find == null) {
            find = {value: 99, text: "없음"}
        }
        return find;
    }
}
