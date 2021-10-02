const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, renewToken } = require('../controllers/auth');

const router = Router();

// Create new user
router.post( '/create', [
    check('email', 'Email is mandatory').isEmail(),
    check('name', 'Name is mandatory').not().isEmpty(),
    check('password', 'Password must be 6 characters minimum').isLength({ min: 6 })
], createUser );

// Login user
router.post( '/', [
    check('email', 'Email is mandatory').isEmail(),
    check('password', 'Password must be 6 characters minimum').isLength({ min: 6 })
], loginUser );

// Validate and revalidate token
router.get( '/renew', renewToken );

module.exports = router;
