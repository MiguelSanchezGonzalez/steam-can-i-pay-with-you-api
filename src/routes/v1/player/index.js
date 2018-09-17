// Express
const router = require( 'express' ).Router;

// Application
const getOwnedGames = require( './get-owned-games' );

const routes = router()
    .use(
        '/player/:id/',
        getOwnedGames
    );

module.exports = routes;
