// Application
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const morgan = require( 'morgan' );

// Envs
const env = require( './env' );
const port = env.PORT;
const webAppServer = env.WEBAPP_SERVER;

// Application
const api = require( './src/routes' );

const app = express();

// Middleware
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( cors( {
    origin: webAppServer
} ) );
app.use( morgan( 'tiny' ) );

app.use( api );

app.listen( port );
