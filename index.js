// Application
const express = require( 'express' );
const bodyParser = require('body-parser');
const cors = require( 'cors' );
const morgan = require( 'morgan' );

// Envs
const env = require( './env' );

const port = env.PORT;
const webAppServer = env.WEBAPP_SERVER;

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
