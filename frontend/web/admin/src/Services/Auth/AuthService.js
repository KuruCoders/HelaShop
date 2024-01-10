import axios from "axios";
import BaseService from "../Base/BaseService";

class AuthService{
    constructor(){
        BaseService.getBaseURL()
        this.REGISTER_URL = "auth/register"
        this.LOGIN_URL = "auth/login"
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
    authLogin(input) {
        let data = {
            email : input.email,
            password: input.password, 
            role:'admin'
        }
        return axios.post(this.LOGIN_URL,data)
    }
}
export default AuthService = new AuthService();