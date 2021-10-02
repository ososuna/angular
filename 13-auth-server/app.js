const express = require('express');
const cors = require('cors');

// Create express server
const app = express();

// CORS
app.use( cors() );

// Lecture and body parse
app.use( express.json() );

// Routes
app.use( '/api/auth', require('./routes/auth') );

app.listen( 4000, () => {
    console.log(`Server running in port ${ 4000 }`);
});
