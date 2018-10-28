const getSchemaForGame = require( '../steam-api/getSchemaForGame.js' );

async function getAppDetails ( { params }, response ) {

    const { game } = await getSchemaForGame( params.appid );

    response.json( game );

}

module.exports = getAppDetails;
