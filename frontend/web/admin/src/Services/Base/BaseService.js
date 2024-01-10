import axios from "axios";

class BaseService{
    constructor() {
        axios.defaults.baseURL = "http://localhost:3500/api/v1/"
    }
    getBaseURL() {
        return this.baseURL;
    }
}
export default BaseService = new BaseService()