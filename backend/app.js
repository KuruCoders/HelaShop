import Express from "express";
const app = Express();
import dotenv from "dotenv"
dotenv.config();

import cors from "cors";
import db from "./db.js"
import logger from "./MiddleWare/LogEvents.js"
import corsConfig from "./Config/CorsConfig.js"

const PORT = process.env.PORT || 3499

app.use(cors(corsConfig));
app.use(Express.json());
app.use(logger);

// import routes


// routes definition starts here
app.get("/", (req, res) => {
    return res.status(200).json({ message: "server online" })
})

//db connction
db();

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})