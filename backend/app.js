import Express from "express";
const app = Express();
import dotenv from "dotenv"
dotenv.config();

import cors from "cors";
import db from "./db.js"
import logger from "./MiddleWare/LogEvents.js"
import corsConfig from "./Config/CorsConfig.js"

const PORT = process.env.PORT || 3500

app.use(cors(corsConfig));
app.use(Express.json());
app.use(logger);

// import routes
import AuthRoute from './Routes/Auth/AuthRoute.js'
import response from "./Utils/Constants/Response.js";
import ProductRoute from './Routes/Product/ProductRoute.js'
import AddressRoute from './Routes/Address/AddressRoute.js'
// routes definition starts here
app.get("/", (req, res) => {
    return response(res,200,"Server Online")
})
app.use('/api/v1/auth', AuthRoute)
app.use('/api/v1/product',ProductRoute)
app.use('/api/v1/user/address',AddressRoute)

//db connction
db();

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})