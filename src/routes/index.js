// Express
const router = require( 'express' ).Router;

// Application
const v1 = require( './v1' );

const routes = router()
    .use(
        '/api/',
        v1
    );

module.exports = routes;
