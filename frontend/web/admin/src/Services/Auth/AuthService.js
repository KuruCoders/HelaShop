import axios from "axios";
import BaseService from "../Base/BaseService";

class AuthService{
    constructor(){
        BaseService.getBaseURL()
        this.REGISTER_URL = "auth/register"
    }
    authRegister(input) {
        const name = input.username
        let data = {
            email : input.email,
            password:input.password,
            role:'admin',
            name:name
        }
        return axios.post(this.REGISTER_URL,data)
    }
}
export default AuthService = new AuthService();