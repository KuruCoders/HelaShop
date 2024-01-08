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
}

export default ProductYup = new ProductYup()