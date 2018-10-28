const { fetchSteamAPI } = require( './utils.js' );

const resource = 'ISteamUserStats/GetSchemaForGame/v2/';

function getSchemaForGame ( appId ) {

    const input = {
        appid: appId,
        format: 'json'
    };

    return fetchSteamAPI( resource, input );

}

module.exports = getSchemaForGame;
