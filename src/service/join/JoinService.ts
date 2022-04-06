interface User {
    userEmail: string,
    userName: string,
    userClass: number,
    userAgeBoundary: string,
    nickName: String
}
export default class JoinService {

    doValidation(params: User) {
        if (params.nickName === '') {
            alert('이름을 입력하여 주세요.');
            return false;
        }
        if (params.userAgeBoundary === '') {
            alert("또래를 입력해주세요.");
            return false;
        }
        if(params.nickName === '') {
            alert("닉네임을 입력해주세요.");
            return false;
        }
        return true;
    }
}
