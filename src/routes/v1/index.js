// Express
const router = require( 'express' ).Router;

// Application
const utils = require( './utils' );
const player = require( './player' );

router()
    .use(
        '/v1/',
        utils,
        player
    );

module.exports = router;
