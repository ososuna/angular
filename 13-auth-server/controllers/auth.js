const { request, response } = require('express');

const createUser = (req = request, res = response) => {

    const { email, name, password } = req.body;

    console.log( req.body );

    return res.json({
        msg: 'Create user'
    });

}

const loginUser = (req, res) => {

    const { email, password } = req.body;

    console.log( req.body );

    return res.json({
        msg: 'Login user'
    });

}

const renewToken = (req, res) => {

    return res.json({
        msg: 'Renew'
    });

}

module.exports = {
    createUser,
    loginUser,
    renewToken
}
