import axios from 'axios';

//const USER_API_BASE_URL = "http://localhost:8080/users";
const USER_API_BASE_URL = "http://192.168.0.161:2080/Hin0021000228";

const params = {
    loginMethod : "EASY"
   ,signCert : ""
   ,signPri : ""
   ,signPw : ""
   ,loginOrgCd : "kakao"
   ,mobileNo : "01075176149"
   ,mobileCo : ""
   ,step : ""
   ,step_data : ""
   ,name : "한지우"
   ,rrn1 : "750318"
   ,rrn2 : "1106231"
   ,fthrNm : ""
   ,mthrNm : ""
   ,sposNm : "전은영"
   ,childNm : ""
   ,addrYn : "N"
   ,sidoNm : ""
   ,sggNm : ""
   ,strNm : ""
   ,baseyn : ""
   ,bdmno : ""
   ,bdsno : ""
   ,emdNm : ""
   ,riNm : ""
   ,spcdstFg : ""
   ,mnlno : ""
   ,sblno : ""
   ,req_fmyrltCd : "01"
   ,req_name : "한지우"
   ,req_rrn1 : "750318"
   ,req_rrn2 : "1106231"
   ,certCerFg : "4"
   ,rrnPaYn : "1"
   ,issrsnCd : "01"
   ,pdfYn : ""
}

class ApiService {
    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserByID(userID) {
        return axios.get(USER_API_BASE_URL + '/' + userID);
    }

    deleteUser(userID) {
        return axios.delete(USER_API_BASE_URL + '/' + userID);
    }

    addUser(user) {
        //return axios.post(USER_API_BASE_URL, user);
        console.log(JSON.stringify(params));
        return axios.post(USER_API_BASE_URL, JSON.stringify(params), {
            headers: { "Content-Type": `application/json`}
        } );  
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }
}

export default new ApiService();