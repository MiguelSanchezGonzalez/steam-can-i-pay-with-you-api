// Express
const router = require( 'express' ).Router();

// Application
const resolveVanityUrl = require( './resolve-vanity-url.js' );

router.use(
    '/utils/',
    resolveVanityUrl
);

module.exports = router;
