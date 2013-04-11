BBCloneMail.module("Entities", function (Entities, App, Backbone, Marionette, $, _) {
  "use strict";

  var Contact = Backbone.Model.extend({
    initialize: function() {
      Backbone.Compute(this);
    },

    fullName: {
      fields: ["firstName", "lastName"],
      compute: function(fields) {
        return fields.lastName + ", " + fields.firstName;
      }
    }
  });

  var ContactCollection = Backbone.Collection.extend({
    model: Contact,
    url: "/contacts"
  });

  var API = {

    getAll: function () {
      var deferred = $.Deferred();

      this._getContacts(function(contacts) {
        deferred.resolve(contacts);
      });

      return deferred.promise();
    },

    _getContacts: function(callback) {
      var contactsCollection = new ContactCollection();
      contactsCollection.on("reset", callback);
      contactsCollection.fetch();
    }
  };

  App.reqres.addHandler("contacts:entities", function () {
    return API.getAll();
  })
});