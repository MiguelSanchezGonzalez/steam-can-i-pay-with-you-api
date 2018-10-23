// Express
const router = require( 'express' ).Router;
const asyncHandler = require( 'express-async-handler' );

// Application
const getFriendsByUser = require( '../../../api/get-friend-list-by-user.js' );
const routerOptions = { mergeParams: true };

const routes = router( routerOptions )
    .get(
        '/friends/:relationship?',
        asyncHandler( getFriendsByUser )
    );

module.exports = routes;
