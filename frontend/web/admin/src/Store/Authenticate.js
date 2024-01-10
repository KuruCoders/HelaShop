import LocalStore from "./LocalStore"

class Authenticate{
    isAuthenticated() {
        return LocalStore.getToken()!=null?true : false
    }
    logoutUser() {
        LocalStore.removeToken();
    }
}
export default Authenticate = new Authenticate()