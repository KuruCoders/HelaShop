import response from "../../../Utils/Constants/Response.js";
import HttpStatus from "../../../Utils/Constants/HttpType.js";
import ResTypes from "../../../Utils/Constants/ResTypes.js";
import Address from "../../../Model/Address.js";
import User from "../../../Model/User.js";

class AddressController{

    //get address
    getAddress = async (req, res) => {
        const { email } = req.body;
        try {
            const userExist = await User.findOne({ email })
            if (!userExist) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_user)
            
            const address = await Address.findOne({ email })
            if (!address) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_address)
            return response(res,200,HttpStatus.getStatus(200),{...ResTypes.successMessages.address_found,address})
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //add Address
    addAddress = async (req,res)=> {
        const { email, district , province, country, city, street, postalCode, zipCode } = req.body;
        try {
            const userExist = await User.findOne({ email })
            if (!userExist) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_user)
            
            const userHaveAddress = await Address.findOne({ email })
            if(userHaveAddress) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.address_exists)

            const address = new Address({ email, district, province, country, city, street, postalCode, zipCode })
            const result = await address.save()
            if (result) {
                return response(res,201,HttpStatus.getStatus(201),ResTypes.successMessages.address_added)
            } else {
                return response(res,403,HttpStatus.getStatus(403),ResTypes.errors.address_failed)
            }
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //edit address
    updateAddress = async (req, res) => {
        const { email, district, province, country, city, street, postalCode, zipCode } = req.body;
        try {
            const userExist = await User.findOne({ email })
            if (!userExist) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_user)

            const userHaveAddress = await Address.findOne({ email })
            if (!userHaveAddress) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.no_address)

            const result = await Address.updateOne(
                { email },
                {$set:{district, province, country, city, street, postalCode, zipCode}}
            )
            if (result.modifiedCount === 0) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.failed_operation)
            return response(res,201,HttpStatus.getStatus(201),ResTypes.successMessages.address_edited)
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }

}
export default AddressController =new AddressController()