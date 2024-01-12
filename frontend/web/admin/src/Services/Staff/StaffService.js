import axios from "axios"
import BaseService from "../Base/BaseService";
import LocalStore from "../../Store/LocalStore";

class StaffService{
    constructor(){
        BaseService.getBaseURL()
        this.CREATE_STAFF = "staff/add-staff";
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

}
export default StaffService = new StaffService()