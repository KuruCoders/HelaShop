const response = (res, code, status, data ) => {
    const payLoad = {
        code,
        status,
        data
    }
    return res.status(code).json(payLoad);
}
export default response