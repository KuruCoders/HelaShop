class ResTypes {
  errors = {
    missing_token: { message: "Bearer token is missing" },
    invalid_token: { message: "Token is invalid" },
    cancelled_token: { message: "Token has been revoked" },
    invalid_password: { message: "Invalid password" },
    invalid_email: { message: "Invalid email" },
    token_expired: { message: "Token has expired" },
    unverified_user: { message: "User hasn't been verified yet" },
    no_user: { message: "No User Found" },
    user_exists: { message: "User Already Registered" },
    invalid_code: { message: "Invalid verification code" }
  };
  successMessages = {
    user_created: { message: "User created" },
    verify_email: { message: "Please Verify email" },
    login_successful: { message: "Login successful" },
    data_retrieved: { message: "Data retrieved successfully" },
  };
}

export default ResTypes = new ResTypes()