class LocalStore{
    storeToken(data) {
        localStorage.setItem("token", data);
    }
    getToken() {
        return localStorage.getItem("token");
    }
    removeToken() {
        localStorage.removeItem("token")
    }
}
export default LocalStore = new LocalStore()