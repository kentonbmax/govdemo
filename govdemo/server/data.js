module.exports.Data = {
    logins: [],
    groups: [],
    contacts: [],
    logins: [],
    
}

class Logins {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

class ContactGroup {
    constructor(enabled, name){
        this.enabled = enabled;
        this.name = name;
    }
}

class Contact {
    constructor(email, phone, address) {
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}