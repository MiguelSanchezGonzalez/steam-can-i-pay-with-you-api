// Express
const router = require( 'express' ).Router;
const asyncHandler = require( 'express-async-handler' );

// Application
const getGameSchema = require( '../../../api/get-schema-for-game.js' );
const routerOptions = { mergeParams: true };

const routes = router( routerOptions )
    .get(
        '/schema',
        asyncHandler( getGameSchema )
    );

module.exports = routes;
