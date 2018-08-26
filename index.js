// Application
const express = require( 'express' );
const bodyParser = require('body-parser');
const cors = require( 'cors' );
const asyncHandler = require( 'express-async-handler' );

// Envs
require( 'dotenv' ).config();
const port = process.env.PORT;  
const webAppServer = process.env.WEBAPP_SERVER;

const app = express();

// Middleware
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() ); 
app.use( cors( {
    origin: webAppServer
} ) );

// Application routes
const getOwnedGames = require( './src/api/get-games-owned-by-user.js' );
app.get( '/get-games-owned-by/:steamid', asyncHandler( getOwnedGames ) );

app.listen( port, () => console.log( 'app running' ) );
