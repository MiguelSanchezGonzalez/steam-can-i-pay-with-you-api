const getAppDetails = require( '../steam-api/getAppDetails.js' );

async function getGameDetails ( request, response ) {

    const {
        params, query
    } = request;

    const game = await getAppDetails( params.appid, query.filters );

    response.json( game );

}

module.exports = getGameDetails;
