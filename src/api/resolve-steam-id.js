const resolveVanityUrl = require( '../steam-api/resolveVanityURL.js' );

async function getSteamAppId( { params: { id } }, response ) {
    
    let result;

    if ( Number( id ) ) {
        result = id;
    } else {
        const response = await resolveVanityUrl( id );
        result = response.steamid;
    }

    response.json( result );

}

module.exports = getSteamAppId;
