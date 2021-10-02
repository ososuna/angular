const { request, response } = require('express');
const { validationResult } = require('express-validator');

const createUser = (req = request, res = response) => {

    const errors = validationResult( req );
    
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            errors: errors.mapped()
        })
    }

    const { email, name, password } = req.body;

    console.log( req.body );

    return res.json({
        msg: 'Create user'
    });

}

const loginUser = (req = request, res = respose) => {

    const errors = validationResult( req );
    
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            errors: errors.mapped()
        })
    }

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
