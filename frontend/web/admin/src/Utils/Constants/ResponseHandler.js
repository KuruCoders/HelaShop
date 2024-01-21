import LocalStore from "../../Store/LocalStore";
import Toaster from "./Toaster"

class ResponseHandler {
    handleResponse(error) {
        const { code, data } = error.response.data
        switch (code) {
            case 401:
                this.handle401TokenError(data.message)
                break;
            // case 404:
            //     this.handle404Error(data.message)
            //     break;
            //more to go
            default:
                this.handleCommonError(data.message)
                // console.log("no code found for", code)
        }
    }
    handle401TokenError(message) {
        Toaster.justToast('error', message, () => {
            LocalStore.removeToken();
            // Force a full-page refresh
            window.location.reload(true);
        })
    }
    handleCommonError(message) {
        Toaster.justToast('error', message, () => {
            
        })
    }
    // handle404Error(message) {
    //     Toaster.justToast('error', message, () => {
    //         //write anthing
    //     })
    // }
}

export default ResponseHandler = new ResponseHandler()