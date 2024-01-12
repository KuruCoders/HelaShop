import axios from "axios"
import BaseService from "../Base/BaseService";

class StaffService{
    constructor(){
        BaseService.getBaseURL()
        this.CREATE_STAFF = "staff/add-staff";
        this.GET_STAFF = "staff/get-allStaff";
    }
    addStaff(input) {
        let data = {
            email: input.email,
            name: input.name,
            salary: input.salary,
            telephone: input.telephone,
            gender: input.gender,
            role: input.role,
            age: input.age
        }
        return axios.post(this.CREATE_STAFF, data, BaseService.getHeader())
    }
    getAllStaff() {
        return axios.get(this.GET_STAFF,BaseService.getHeader())
    }
}
export default StaffService = new StaffService()