// Application
const { fetchSteamAPI } = require( './utils.js' ); 

const resource = 'IPlayerService/GetOwnedGames/v0001';

function getOwnedGames ( steamId, filter = [] ) {

    const input = {
        'appids_filter': filter,
        'include_played_free_games': true,
        'steamid': steamId,
        'include_appinfo': true,
        'format': 'json'
    };

    return fetchSteamAPI( resource, input );

}

module.exports = getOwnedGames;
