// Application
const { fetchSteamAPI } = require( './utils.js' );

const resource = 'IPlayerService/GetOwnedGames/v0001';

function getOwnedGames ( steamId, filter = [] ) {

    const input = {
        /* eslint-disable-next-line camelcase */
        appids_filter: filter,
        format: 'json',
        /* eslint-disable-next-line camelcase */
        include_appinfo: true,
        /* eslint-disable-next-line camelcase */
        include_played_free_games: true,
        steamid: steamId
    };

    return fetchSteamAPI( resource, input );

}

module.exports = getOwnedGames;
