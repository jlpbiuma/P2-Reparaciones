const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");

let actualUser = {} 

async function checkAuth (req, res, next)
{
    if (!req.query.token)
    {
        return res.status(401).send("Token not introduced");
    }
    jwt.verify(req.query.token, process.env.SECRET, async (err, decoded) => {
        if (err)
        {
            return res.status(500).send("Token not valid")
        }
        const user = await User.findOne({email: decoded.email})
        if (!user)
        {
            return res.status(401).send("Token not valid");
        }
        actualUser = user;
        next();
    })
}

function checkRol (req, res, next)
{
    if (actualUser.rol === "technical")
    {
        next();
    }
    else
    {
        res.json({message: "User not authorized"})
    }
}

function checkRolFirstAndIdBefore (req, res, next)
{
    if (actualUser.rol === "technical")
    {
        next();
    }
    else
    {
        if (actualUser.id === req.params.id)
        {
            next();
        }
        else
        {
            res.json({message: "User not authorized"})
        }
    }
}

module.exports = {checkAuth, checkRol, checkRolFirstAndIdBefore}