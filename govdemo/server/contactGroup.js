'use strict';
const _ = require('lodash');
const _groups = [];
module.exports = class ContactGroup {
    constructor(enabled, name){
        this.enabled = enabled;
        this.name = name;
    }

    add(name) {
        _groups.push({enabled: true, name: name });
    }

    updateStatus(name, status) {
        var index = _.find(_groups, {name: name});

        if(index > -1) {
            _groups[index].enabled = status;
        }
    }
}