// Express
const router = require( 'express' ).Router;
const asyncHandler = require( 'express-async-handler' );

// Application
const gameDetails = require( '../../../api/get-game-details.js' );
const routerOptions = { mergeParams: true };

const routes = router( routerOptions )
    .get(
        '/',
        asyncHandler( gameDetails )
    );

module.exports = routes;
