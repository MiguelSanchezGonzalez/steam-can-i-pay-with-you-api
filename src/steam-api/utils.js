// Dependencies
const { get } = require( 'request' );

const KEY = process.env.KEY;
const base = 'http://api.steampowered.com';

function fetchSteamAPI ( resource, input, extraRequestOptions = {} ) {

    let qs = {
        key: KEY
    };

    if ( isServiceApi( resource ) ) {
        qs.input_json = JSON.stringify( input )
    } else {
        qs = {
            ...qs,
            ...input
        }
    }

    const endpoint = `${ base }/${ resource }/`;

    return new Promise( ( resolve, reject ) => {

        const requestOptions = {
            json: true,
            ...extraRequestOptions,
            qs
        };

        get( endpoint, requestOptions, ( error, response, body ) => {
            
            if ( error || !body ) {
                return reject( error );
            }

            return resolve( body.response );

        } );

    } );
}


const isServiceApi = resource =>
    resource.split( '/' )[ 0 ].endsWith( 'Service' );

module.exports = {
    KEY,
    fetchSteamAPI
};
