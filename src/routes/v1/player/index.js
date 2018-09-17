// Express
const router = require( 'express' ).Router;

// Application
const getOwnedGames = require( './get-owned-games' );

router()
    .use(
        '/player/:id/',
        getOwnedGames
    );

module.exports = router;
