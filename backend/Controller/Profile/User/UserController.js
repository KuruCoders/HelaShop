import response from "../../../Utils/Constants/Response.js";
import HttpStatus from "../../../Utils/Constants/HttpType.js";
import ResTypes from "../../../Utils/Constants/ResTypes.js";
import User from "../../../Model/User.js";
import bcrypt from "bcryptjs";

class UserController {
    //getAllUsers
    getAllUsers = async (req, res) => {
        try {
            const users = await User.find({isActive:true})
            if (!users) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_user)
            return response(res, 200, HttpStatus.getStatus(200), { ...ResTypes.successMessages.data_retrieved, users })
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //getUserByEmail
    
    getUserByEmail = async (req, res) => {
        try {
            const { email } = req.body
            const user = await User.findOne({ email })
            if (!user) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_user)
            return response(res, 200, HttpStatus.getStatus(200), { ...ResTypes.successMessages.data_retrieved, user })
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //create user
    createUser = async (req, res) => {
        try {
            const { name, email, password, role,telephone,gender,age } = req.body
            const userExist = await User.findOne({ email })
            if (userExist) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.user_exists)

            const hashedPassword = await bcrypt.hash(password, 10)
            const user = new User({ name, email, password: hashedPassword, role, isVerfied: true, isActive: true,telephone,gender,age  })
            const result = await user.save()
            if (result) {
                return response(res, 201, HttpStatus.getStatus(201), { ...ResTypes.successMessages.user_created, user })
            } else {
                return response(res, 403, HttpStatus.getStatus(403), { ...ResTypes.errors.failed_operation })
            }
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //deactivateUer
    deactivateUser = async (req, res) => {
        try {
            const { email } = req.body
            const userExist = await User.findOne({ email })
            if (!userExist) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.no_user)
            const result = await User.updateOne(
                { email },
                { $set: { isActive: false } }
            )
            if (result.modifiedCount === 0) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.failed_operation)
            return response(res, 200, HttpStatus.getStatus(200), ResTypes.successMessages.user_edited)
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //updateUser
    updateUser = async (req, res) => {
        try {
            const { name, email, role,telephone,age,gender } = req.body
            const userExist = await User.findOne({ email })
            if (!userExist) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.no_user)

            const result = await User.updateOne(
                { email },
                { $set: { name, role,telephone,age,gender } }
            )
            if (result.modifiedCount === 0) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.failed_operation)
            return response(res, 200, HttpStatus.getStatus(200), ResTypes.successMessages.user_edited)

        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //updateUserPic
    updateUserPic = async (req, res) => {
        try {
            const { email, photoUrl } = req.body;
            const userExist = await User.findOne({ email })
            if (!userExist) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.no_user)
            
            const result = await User.updateOne(
                { email },
                {$set:{photoUrl}}
            )
            if (result.modifiedCount === 0) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.failed_operation)
            return response(res,200,HttpStatus.getStatus(200),ResTypes.successMessages.user_edited)
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //edit address and add Address  
    manipulateAddress = async (req, res) => {
        const { email, address } = req.body;
        const { district, province, city, street, postalCode } = address;
        try {
            const userExist = await User.findOne({ email })
            if (!userExist) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_user)

            const result = await User.updateOne(
                { email },
                {
                    $set: { address: { district, province, city, street, postalCode } }
                }
            )
            if (!result) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.failed_operation)
            return response(res, 201, HttpStatus.getStatus(201), ResTypes.successMessages.address_edited)
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
    //updatePassword 
    updatePassword = async (req, res) => {
        const { email, password } = req.body;
        try {
            const userExist = await User.findOne({ email })
            if (!userExist) return response(res, 404, HttpStatus.getStatus(404), ResTypes.errors.no_user)
            
            const hashedPasword = await bcrypt.hash(password, 10)
            const result = await User.updateOne(
                { email },
                {$set:{password:hashedPasword}}
            )
            if (result.modifiedCount === 0) return response(res, 403, HttpStatus.getStatus(403), ResTypes.errors.failed_operation)
            return response(res,200,HttpStatus.getStatus(200),ResTypes.successMessages.user_edited)
        } catch (error) {
            console.log(error)
            return response(res, 500, HttpStatus.getStatus(500), error)
        }
    }
}

export default UserController = new UserController()