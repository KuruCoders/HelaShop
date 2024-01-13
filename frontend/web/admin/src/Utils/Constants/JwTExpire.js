import LocalStore from "../../Store/LocalStore";

class JwTExpire{
    expired() {
        LocalStore.removeToken()
    }
   
}