const getOwnedGames = require( '../steam-api/getOwnedGames.js' );

async function getGamesOwnedByUser ( { params }, response ) {

    const games = await getOwnedGames( params.id, params.filter );

    response.json( games );

}

module.exports = getGamesOwnedByUser;
