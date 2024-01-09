import yup from 'yup'

class ProductYup{
    addProduct = yup.object({
        name: yup.string().required(),
        imgUrl: yup.string().required(),
        description: yup.string().required(),
        price: yup.number().required(),
        discount: yup.number().required(),
        stock: yup.string().required(),
        category: yup.string().required(),
        color: yup.string().required(),
        pieces: yup.number().required(),
    })
    addReviews = yup.object({
        pid: yup.string().required(),
        review: yup.array(
            yup.object({
                email: yup.string().email().required(),
                text: yup.string().required(),
                stars:yup.number().required().min(1,'rating must be at least 1').max(5,'rating must be at most 5')
            })
        ).required()
    })
    deleteProduct = yup.object({
        pid: yup.string().required(),
    })
}

export default ProductYup = new ProductYup()