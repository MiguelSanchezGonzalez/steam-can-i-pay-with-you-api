// Dependencies
const { get } = require( 'request' );

const { KEY } = require( '../../env.js' );
const base = 'http://api.steampowered.com';

const isServiceApi = resource => resource
    .split( '/' )
    .pop()
    .endsWith( 'Service' );

const getRequestOptions = ( input, resource ) => {

    let qs = {
        key: KEY
    };

    if ( isServiceApi( resource ) ) {
        /* eslint-disable-next-line camelcase */
        qs.input_json = JSON.stringify( input );
    } else {
        qs = {
            ...qs,
            ...input
        };
    }

    return {
        json: true,
        qs
    };

};

function fetchSteamAPI ( resource, input, extraRequestOptions = {} ) {
    return new Promise( ( resolve, reject ) => {

        const endpoint = `${ base }/${ resource }/`;

        const requestOptions = {
            ...getRequestOptions( input, resource ),
            ...extraRequestOptions
        };

        get( endpoint, requestOptions, ( error, response, body ) => {

            if ( error || !body ) {
                return reject( error );
            }

            return resolve( body.response || body );

        } );

    } );
}


module.exports = {
    fetchSteamAPI,
    KEY
};
