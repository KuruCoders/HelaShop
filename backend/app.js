import Express from "express";
const app = Express();

import cors from "cors";
import dotenv from "dotenv"
import db from "./db.js"
import logger from "./MiddleWare/LogEvents.js"
import corsConfig from "./Config/CorsConfig.js"
dotenv.config();

const PORT = process.env.PORT || 3500

app.use(cors(corsConfig));
app.use(Express.json());
app.use(logger);

// import routes


// routes definition starts here

//db connction
db();

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})