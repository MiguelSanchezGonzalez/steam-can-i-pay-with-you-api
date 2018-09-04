// Express
const router = require( 'express' ).Router( { mergeParams: true } );
const asyncHandler = require( 'express-async-handler' );

// Application
const getOwnedGames = require( '../../api/get-games-owned-by-user' );

router.get( '/get-owned-games', asyncHandler( getOwnedGames ) );

module.exports = router;
