import axios from "axios"
import BaseService from "../Base/BaseService";

class StaffService{
    constructor(){
        BaseService.getBaseURL()
        this.CREATE_STAFF = "staff/add-staff";
        this.GET_STAFF = "staff/get-allStaff";
        this.GET_STAFF_BY_ID = "staff/get-staff";
        this.DELETE_STAFF = "staff/delete-staff";
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
    getStaffById(email) {
        return axios.post(this.GET_STAFF_BY_ID,{email},BaseService.getHeader())
    }
    deleteStaff(email) {
        return axios.delete(this.DELETE_STAFF,{...BaseService.getHeader(),data:{email}})
    }
}
export default StaffService = new StaffService()