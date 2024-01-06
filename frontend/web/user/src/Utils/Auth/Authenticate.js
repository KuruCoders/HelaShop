import Jwt from "jsonwebtoken";
import LocalStorage from "../Localstore/LocalStorage";

class Authenticate {
    userToken = LocalStorage.getUserToken();

    isAuthenticated() {
        if (!this.userToken) return false;
        if (this.isTokenExpired(this.userToken)) return "Token Exired"
        return true
    }
    logoutUser() {
        LocalStorage.removeUserToken();
    }
    isTokenExpired(token) {
        const decodeToken = Jwt.decode(token);
        const currentTime = Date.now() / 1000;

        return decodeToken.exp < currentTime
    }
}
export default Authenticate = new Authenticate();