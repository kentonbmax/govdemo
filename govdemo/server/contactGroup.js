'use strict';
const _ = require('lodash');
const _groups = [];
module.exports = class ContactGroup {
    constructor() {
    }

    add(email, name) {
        const group = {email: email, enabled: true, name: name, contacts: [] };
        _groups.push(group);
        return group;
    }

    updateStatus(name, status) {
        var index = _.find(_groups, {name: name});

        if(index > -1) {
            _groups[index].enabled = status;
        }
    }

    getByEmail(email) {
        return _.filter(_groups, { email: email });
    };
}