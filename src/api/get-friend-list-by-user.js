const getFriendList = require( '../steam-api/getFriendList.js' );

async function getFriendsByUser ( { params }, response ) {

    const friends = await getFriendList( params.id, params.relationship );

    if ( friends && !friends.friendslist ) {
        throw new Error( 'Invalid request' );
    }

    response.json( friends.friendslist.friends );

}

module.exports = getFriendsByUser;
