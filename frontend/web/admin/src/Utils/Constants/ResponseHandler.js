import LocalStore from "../../Store/LocalStore";
import Toaster from "./Toaster"

class ResponseHandler {
    handleResponse(error) {
        const { code, data } = error.response.data
        switch (code) {
            case 400:
                this.handle400Error(data.message)
                break;
            case 401:
                this.handle401Error(data.message)
                break;
            case 500:
                this.handle500Error(data.message)
                break;
            case 404:
                this.handle404Error(data.message)
                break;
            //more to go
            default:
                console.log("no code found for", code)
        }
    }
    handle401Error(message) {
        Toaster.justToast('error', message, () => {
            LocalStore.removeToken();
            // const navigate = useNavigate();
            //   navigate('/login', { replace: true });
            // Force a full-page refresh
            window.location.reload(true);
        })
    }
    handle500Error(message) {
        Toaster.justToast('error', message, () => {
            //write anthing
        })
    }
    handle404Error(message) {
        Toaster.justToast('error', message, () => {});
        // Add more handling if needed
    }
    handle400Error(message) {
        Toaster.justToast('error', message, () => {});
        // Add more handling if needed
      }
}

export default ResponseHandler = new ResponseHandler()