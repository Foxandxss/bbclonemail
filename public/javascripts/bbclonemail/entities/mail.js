BBCloneMail.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  "use strict";

  var Email = Backbone.Model.extend({
  });

  var EmailCollection = Backbone.Collection.extend({
    model: Email,
    url: "/email"
  });

  var API = {

    getAllEmail: function() {
      var deferred = $.Deferred();

      this._getMail(function(mail) {
        deferred.resolve(mail);
      });

      return deferred.promise();
    },

    _getMail: function(callback) {
      var emailCollection = new EmailCollection();
      emailCollection.on("reset", callback);
      emailCollection.fetch();
    }
  }

  App.reqres.addHandler("all:email:entities", function() {
    return API.getAllEmail();
  })
});