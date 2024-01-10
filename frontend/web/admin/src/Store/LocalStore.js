class LocalStore{
    storeToken(data) {
        localStorage.setItem("helaToken", data);
    }
    getToken() {
        return localStorage.getItem("helaToken");
    }
    removeToken() {
        localStorage.removeItem("helaToken")
    }
}
export default LocalStore = new LocalStore()