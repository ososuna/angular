const { Router } = require('express');
const { createUser, loginUser, renewToken } = require('../controllers/auth');

const router = Router();

// Create new user
router.post( '/create', createUser );

// Login user
router.post( '/', loginUser );

// Validate and revalidate token
router.get( '/renew', renewToken );

module.exports = router;
