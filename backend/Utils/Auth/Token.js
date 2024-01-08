import Jwt  from "jsonwebtoken";

const generateToken = (user) => {
    return Jwt.sign(
        { id: user.id },
        process.env.SECRET,
        { expiresIn:process.env.TOKEN_EXPIRE}
    )
}

export default generateToken;