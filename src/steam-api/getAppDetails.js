const { fetchSteamStoreAPI } = require( './utils.js' );

const resource = 'appdetails';

/**
 *
 * @param {String} appids id to fetch
 * @param {Array<String>} filters list of filters to be applied
 * @param {String} countryCode Country code
 *
 * @return {Promise} Call to the api
 */
function getAppDetails ( appids, filters, countryCode ) {

    let dataFilter = filters;

    if ( filters instanceof Array ) {
        dataFilter = filters.join( ',' );
    }

    const input = {
        appids,
        countryCode,
        filters: dataFilter
    };

    return fetchSteamStoreAPI( resource, input )
        .then( ( { [ appids ]: { data } } ) => data );

}

module.exports = getAppDetails;
