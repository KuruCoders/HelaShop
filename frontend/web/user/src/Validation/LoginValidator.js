const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const password_regex =
//   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const password_regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-_]{8,}$/;

class LoginValidator {
    validateLogin(input) {
        const errors = {
            email: { required: false, message: null },
            password: { required: false, message: null }
        }
        if (input.email === "") {
            errors.email.required = true;
            errors.email.message = "Enter Email";
        } else if (!email_regex.test(input.email)) {
            errors.email.required = true;
            errors.email.message = "Email Not Valid"
        }

        if (input.password === "") {
            errors.password.required = true;
            errors.password.message = "Enter Password";
        } else if (!password_regex.test(input.password)) {
            errors.password.required = true;
            errors.password.message = "Ex : Amma12345"
        }
        return errors;
    }
}

export default LoginValidator= new LoginValidator();