// Express
const router = require( 'express' ).Router;

// Application
const getOwnedGames = require( './games' );
const friends = require( './friends.js' );

const routes = router()
    .use(
        '/player/:id/',
        friends,
        getOwnedGames
    );

module.exports = routes;
