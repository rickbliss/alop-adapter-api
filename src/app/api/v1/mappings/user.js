/**
 * Mapping File
 *
 *
 *
 */

'use strict'


class user {
    transform(data){
        var result = {};
        result.id = data.id;
        result.name = data.name;
        result.email = data.email;
        result.sign_in_count = data.sign_in_count || 1;
        result.created_at = data.created_at;
        result.location = data.location || "";
        result.subscriptions = data.subscriptions;
        return result;
    }
}

module.exports = new user();
