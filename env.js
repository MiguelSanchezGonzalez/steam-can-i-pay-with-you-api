const env = require( 'dotenv' )
    .config()
    .parsed;

console.dir( env );

module.exports = env;
