class ResTypes {
  errors = {
    missing_token: { message: "Bearer token is missing" },
    invalid_token: { message: "Token is invalid" },
    cancelled_token: { message: "Token has been revoked" },
    token_expired: { message: "Token has expired" },

    invalid_password: { message: "Invalid password" },
    invalid_email: { message: "Invalid email" },
    unverified_user: { message: "User hasn't been verified yet" },
    no_user: { message: "No User Found" },
    user_exists: { message: "User Already Registered" },
    invalid_code: { message: "Invalid verification code" },
    failed_operation: { message: "failed operation" },

    product_failed: { message: "error adding product" },
    missing_productId: { message: "Error fetching product_id" },
    no_product: { message: "product not found" },

    address_failed: { message: "error adding address" },
    no_address: { message: "no address found" },
    address_exists: { message: "address exists" },

    no_staff: { message: "no staff found" },
    staff_failed: { message: "error adding staff" },
    staff_exists: { message: "staff member exists" },
    staff_pic_fail: { message: "error updating picture" },

  };
  successMessages = {
    success: { message: "fetching success" },
    user_created: { message: "User created" },
    user_edited: { message: "User Edited" },
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

    address_added: { message: "address added succesfully" },
    address_found: { message: "address fetched succesfully" },
    address_edited: { message: "address edited succesfully" },

    staff_added: { message: "staff added succesfully" },
    staff_found: { message: "staff fetched succesfully" },
    staff_edited: { message: "staff edited succesfully" },
    staff_deleted: { message: "staff deleted succesfully" },
    staff_pic_uploaded: { message: "Picture uploaded succesfully" },
  };
}

export default ResTypes = new ResTypes()