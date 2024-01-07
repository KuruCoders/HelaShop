const response = (res, status, message, data ) => {
    const payLoad = {
        status,
        message,
        data
    }
    return res.status(status).json(payLoad);
}
export default response