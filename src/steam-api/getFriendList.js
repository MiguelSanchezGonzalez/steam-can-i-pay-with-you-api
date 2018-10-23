const { fetchSteamAPI } = require( './utils.js' );

const resource = 'ISteamUser/GetFriendList/v0001';

function getFriendList ( steamId, relationship ) {

    const input = {
        format: 'json',
        relationship,
        steamid: steamId
    };

    return fetchSteamAPI( resource, input );

}

module.exports = getFriendList;
