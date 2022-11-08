const User = require("../models/user.model");
const bcrypt = require("bcrypt");

async function signup(req, res)
{
    try
    {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create(req.body);
        const payload = {email: req.body.email, password: req.body.password};
        const token = jwt.sign(payload,process.env.SECRET, {expiresIn: "7w"});
        res.status(200).json({message: "Use Created", token: token});
    }
    catch(err)
    {
        return res.status(500).json(error);
    }
    
}

async function login (req, res)
{
    try
    {
        const user = await User.findOne({ email: req.body.email});
        if (!user)
        {
            return res.status(401).send("Email or password incorrect")
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err)
            {
                return res.status(500).send(err)
            }
            if (!result)
            {
                return res.status(401).send("Email or password incorrect");
            }
            const payload = {email: req.body.email, password: req.body.password};
            const token = jwt.sign(payload,process.env.SECRET, {expiresIn: "7w"});

            return res.status(200).json({token: token})
        })
        
    }
    catch(err)
    {

    }
}

module.exports = {
    signup,
    login
}