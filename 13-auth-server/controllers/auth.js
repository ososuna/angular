const { request, response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

const createUser = async(req = request, res = response) => {
    
    const { email, name, password } = req.body;

    try {        
        // Verify email
        const user = await User.findOne({ email });

        if ( user ) {
            return res.status(400).json({
                msg: 'Already existing email'
            });
        }

        // Create user model
        const dbUser = new User( req.body );

        // Hash password
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );

        // Generate JWT
        const token = await generateJWT( dbUser.id, name );

        // Create DB user
        await dbUser.save();

        // Generate successful response
        return res.status(201).json({
            uid: dbUser.id,
            name,
            email,
            token
        });

    } catch ( error ) {
        return res.status(500).json({
            msg: 'Please talk to the admin'
        });
    }
}

const loginUser = (req = request, res = respose) => {

    const { email, password } = req.body;

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
