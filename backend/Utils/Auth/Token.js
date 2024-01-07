import Jwt  from "jsonwebtoken";

const generateToken = (user) => {
    Jwt.sign(
        { id: user.id },
        process.env.SECRET,
        { expiresIn:"10m"}
    )
}

export default generateToken;