// Express
const router = require( 'express' ).Router;

// Application
const resolveVanityUrl = require( './resolve-vanity-url.js' );

const routes = router()
    .use(
        '/utils/',
        resolveVanityUrl
    );

module.exports = routes;
