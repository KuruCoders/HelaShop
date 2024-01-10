const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_])[a-zA-Z\d!@#$%^&*()-_]{8,}$/;

class LoginValidation{
    validateLogin(input) {
        const errors = {
            email: { required: false, message: null },
            password: { required: false, message: null }
        };

        //email validation
        if (input.email === "") {
            errors.email.required = true;
            errors.email.message = "Email Should Be Filled";
        } else if (!email_regex.test(input.email)) {
            errors.email.required = true;
            errors.email.message = "Ex :- abc@gmail.com";
        }
        //password validation
        if (input.password === "") {
            errors.password.required = true;
            errors.password.message = "Please Enter Password";
        } else if (!password_regex.test(input.password)) {
            errors.password.required = true;
            errors.password.message = "eg :- Amma12345";
        }
        
        return errors
    }
}
export default LoginValidation = new LoginValidation()