import axios from "axios";
import BaseService from "../Base/BaseService";

class UserService{
    constructor() {
        BaseService.getBaseURL()
        this.CREATE_USER = "user/create-user"
    }
    addUser(input) {
        let data = {
            name :input.name,
            email:input.email,
            password:input.password,
            role:input.role,
            telephone:input.telephone,
            gender:input.gender,
            age:input.age
        }
        return axios.post(this.CREATE_USER,data,BaseService.getHeader())
    }
}
export default UserService = new UserService()