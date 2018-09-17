const { fetchSteamAPI } = require( './utils' );

const resource = 'ISteamUser/ResolveVanityURL/v1';

function resolveVanityURL ( vanityurl ) {

    const input = {
        vanityurl
    };

    return fetchSteamAPI( resource, input );

}

module.exports = resolveVanityURL;
