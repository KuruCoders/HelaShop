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
    invalid_code: { message: "Invalid verification code" },
    failed_operation: { message: "failed operation" },
    product_failed: { message: "error adding product" },
    missing_productId: { message: "Error fetching product_id" },
    no_product: { message: "product not found" },
  };
  successMessages = {
    success: { message: "fetching success" },
    user_created: { message: "User created" },
    verify_email: { message: "Please Verify email" },
    login_successful: { message: "Login successful" },
    data_retrieved: { message: "Data retrieved successfully" },
    verify_password: { message: "Token Sent To Mail" },
    password_reseted: { message: "Password Reset Success" },
    product_added: { message: "product added succesfully" },
    product_deleted: { message: "product deleted succesfully" },
    product_already_deleted: { message: "product already deleted" },
    product_updated: { message: "product updated succesfully" },
    review_added: { message: "review added succesfully" },
  };
}

export default ResTypes = new ResTypes()