// Application
const express = require( 'express' );
const bodyParser = require('body-parser');
const cors = require( 'cors' );
const morgan = require( 'morgan' );

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
app.use( morgan( 'tiny' ) );

const api = require( './src/routes' );
app.use( api );

app.listen( port, () => console.log( 'app running' ) );
