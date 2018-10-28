// Express
const router = require( 'express' ).Router;

// Application
const utils = require( './utils' );
const player = require( './player' );
const app = require( './app' );

const routes = router()
    .use(
        '/v1/',
        utils,
        player,
        app
    );

module.exports = routes;
