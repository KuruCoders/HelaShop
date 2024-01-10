const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_])[a-zA-Z\d!@#$%^&*()-_]{8,}$/;
const name_regex = /^[A-Za-z\\s'-]+$/;

class RegisterValidation {
    validateRegister(input) {
        const errors = {
            email: { required: false, message: null },
            password: { required: false, message: null },
            username: { required: false, message: null },
        };
        //email valdation
        if (input.email === "") {
            errors.email.required = true;
            errors.email.message = "Please Enter Email"
        } else if (!email_regex.test(input.email)) {
            errors.email.required = true;
            errors.email.message = "Enter Valid Email";
        }
        //password valdation

        if (input.password === "") {
            errors.password.required = true;
            errors.password.message = "Please Enter Password";
        } else if (!password_regex.test(input.password)) {
            errors.password.required = true;
            errors.password.message = "Enter Valid Password";
        }
        //username valdation
        if (input.username === "") {
            errors.username.required = true;
            errors.username.message = "Please Enter Name";
        } else if (!name_regex.test(input.username)) {
            errors.username.required = true;
            errors.username.message = "Name Mismatch";
        }
        return errors
    }
}
export default RegisterValidation = new RegisterValidation()