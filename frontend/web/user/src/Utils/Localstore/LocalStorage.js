class LocalStore {
    storeUserToken(data) {
        localStorage.setItem("Token", data);
    }
    getUserToken() {
        return localStorage.getItem("Token");
    }
    removeUserToken() {
        localStorage.removeItem("Token");
    }
}
export default LocalStore = new LocalStore();