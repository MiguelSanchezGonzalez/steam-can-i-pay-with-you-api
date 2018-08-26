// Dependencies
const { get } = require( 'request' );

const KEY = process.env.KEY;
const base = 'http://api.steampowered.com';

function fetchSteamAPI ( resource, input, extraRequestOptions = {} ) {

    const inputJSON = JSON.stringify( input )
    const endpoint = `${ base }/${ resource }/?key=${ KEY }&input_json=${ inputJSON }`;

    return new Promise( ( resolve, reject ) => {

        const requestOptions = {
            json: true,
            ...extraRequestOptions
        };

        get( endpoint, requestOptions, ( error, response, body ) => {
            
            if ( error || !body ) {
                return reject( error );
            }

            return resolve( body.response );

        } );

    } );
}

module.exports = {
    KEY,
    fetchSteamAPI
};
