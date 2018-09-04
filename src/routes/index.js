// Express
const router = require( 'express' ).Router();

// Application
const utils = require( './utils' );
const player = require( './player' );

router.use(
    '/api',
    utils,
    player
);

module.exports = router;
