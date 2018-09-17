// Express
const router = require( 'express' ).Router;
const asyncHandler = require( 'express-async-handler' );

// Application
const getOwnedGames = require( '../../../api/get-games-owned-by-user' );
const routerOptions = { mergeParams: true };

const routes = router( routerOptions )
    .get(
        '/get-owned-games',
        asyncHandler( getOwnedGames )
    );

module.exports = routes;
