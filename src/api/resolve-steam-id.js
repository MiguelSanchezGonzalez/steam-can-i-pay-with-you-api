const resolveVanityUrl = require( '../steam-api/resolveVanityURL.js' );

async function getSteamAppId ( { params: { id } }, response ) {

    let result = '';

    if ( Number( id ) ) {
        result = id;
    } else {
        const vanityUrl = await resolveVanityUrl( id );

        result = vanityUrl.steamid;
    }

    response.json( result );

}

module.exports = getSteamAppId;
