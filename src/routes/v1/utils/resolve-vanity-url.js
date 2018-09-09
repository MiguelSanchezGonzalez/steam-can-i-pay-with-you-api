// Express
const router = require( 'express' ).Router();
const asyncHandler = require( 'express-async-handler' );

// Application
const getSteamAppId = require( '../../../api/resolve-steam-id.js' );

router.get( '/resolve-vanity-url/:id', asyncHandler( getSteamAppId ) );

module.exports = router;
