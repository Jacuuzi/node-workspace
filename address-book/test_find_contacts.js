"use strict";
var contact_1 = require('./contact');
var jsonfile_1 = require("./jsonfile");
var async = require("async");
var repository = new contact_1.JsonfileContactRepository(new jsonfile_1.Jsonfile());
var contact = {
    name: "John Smith",
    number: "123-123-123"
};
function saveContact(callback) {
    repository.saveContact(contact, function (err) {
        if (err) {
            console.error(err);
        }
        else {
            console.log("saved");
            callback();
        }
    });
}
function findContact(callback) {
    repository.findContacts('John Smith', function (err, data) {
        if (err) {
            console.error(err);
        }
        else {
            console.log(data);
            callback();
        }
    });
}
async.series([
    saveContact,
    findContact
], function (err) {
    if (err)
        console.error(err);
});
//# sourceMappingURL=test_find_contacts.js.map