import axios from "axios";
import LocalStore from "../../Store/LocalStore";

class BaseService{
    constructor() {
        // axios.defaults.headers.common = {'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWU2MTE1NmViNmMxZWNkMWQyY2VmYiIsImlhdCI6MTcwNTAyNzAwMiwiZXhwIjoxNzA1MDQ1MDAyfQ.psFGN2kfFl_JKxCG_XrXmbyJFRmU_u_uz_k3sH6SF0A`}
        axios.defaults.baseURL = "http://localhost:3500/api/v1/"
    }
    getHeader() {
        return { headers: { Authorization: `Bearer ${LocalStore.getToken()}` } }
    }
    getBaseURL() {
        return this.baseURL;
    }
}
export default BaseService = new BaseService()