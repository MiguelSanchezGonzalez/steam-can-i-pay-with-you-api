// Express
const router = require( 'express' ).Router;

// Application
const schema = require( './schema.js' );
const details = require( './details.js' );

const routes = router()
    .use(
        '/app/:appid',
        schema,
        details
    );

module.exports = routes;
