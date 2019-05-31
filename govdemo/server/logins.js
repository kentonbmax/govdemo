'use strict';
const _ = require('lodash');
const logins = [];
module.exports = class Logins {
    constructor() {
    }

    add(email, password) {
        if(email && password) {
            if(this.valid(email, password)) {
                return false
            }
            logins.push({email: email, password: password })
            return true;
        }
    }

    valid(email, password) {
        if(logins && logins.length > 0) {
            var result = _.find(logins, {email: email })
            return result ? result.password === password : false;
        }
    }

}