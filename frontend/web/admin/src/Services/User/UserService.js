import axios from "axios";
import BaseService from "../Base/BaseService";

class UserService{
    constructor() {
        BaseService.getBaseURL()
        this.GET_USER = "user/get-users";
        this.CREATE_USER = "user/create-user"
        this.DELETE_STAFF = "user/deactivate-user";
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
    getUsers() {
        return axios.get(this.GET_USER,BaseService.getHeader())
    }
    deleteUser(email) {
        return axios.post(this.DELETE_STAFF,{email},BaseService.getHeader())
    }
}
export default UserService = new UserService()