const User = require("../models/user.model.js");
const Repair = require("../models/repair.model.js");
const jwt = require("jsonwebtoken");

async function checkAuth (req, res, next)
{
    if (!req.headers.token)
    {
        return res.status(401).send("Token not introduced");
    }
    jwt.verify(req.headers.token, process.env.SECRET, async (err, decoded) => {
        if (err)
        {
            return res.status(500).send("Token not valid")
        }
        const user = await User.findOne({email: decoded.email})
        if (!user)
        {
            return res.status(401).send("Token not valid");
        }
        res.locals.user = user;
        next();
    })
}

function checkRol (req, res, next)
{
    if (res.locals.user.rol === "technical" || res.locals.user.rol === "admin")
    {
        next();
    }
    else
    {
        res.json({message: "User not authorized"})
    }
}

function checkRolAdmin (req, res, next)
{
    if (res.locals.user.rol === "admin")
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
    if (res.locals.user.rol === "technical" || res.locals.user.rol === "admin")
    {
        next();
    }
    else
    {
        console.log(res.locals.user.id, req.params.id)
        if (res.locals.user.id === req.params.id)
        {
            next();
        }
        else
        {
            res.json({message: "User not authorized"})
        }
    }
}

function checkRolAdminFirstAndIdBefore (req, res, next)
{
    if (res.locals.user.rol == "admin")
    {
        next();
    }
    else if(res.locals.user.rol === "technical")
    {
        if (res.locals.user.id === req.params.id)
        {
            next();
        }
        else
        {
            res.json({message: "User not authorized"})
        }
    }
    else
    {
        res.json({message: "User not authorized"})
    }
}

module.exports = {checkAuth, checkRol, checkRolAdmin, checkRolFirstAndIdBefore, checkRolAdminFirstAndIdBefore}