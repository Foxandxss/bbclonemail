BBCloneMail.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  "use strict";

  var Email = App.Entities.Model.extend({
  });

  var EmailCollection = App.Entities.Collection.extend({
    model: Email,
    url: "/email"
  });

  var API = {

    getAll: function() {
      var deferred = $.Deferred();

      this._getMail(function(mail) {
        deferred.resolve(mail);
      });

      return deferred.promise();
    },

    getById: function(id) {
      var deferred = $.Deferred();

      this._getMail(function(mailList) {
        var mail = mailList.get(id);
        deferred.resolve(mail);
      });

      return deferred.promise();
    },

    getByCategory: function(categoryName) {
      var deferred = $.Deferred();

      this._getMail(function(unfiltered) {
        var filtered = unfiltered.filter(function(mail) {
          var categories = mail.get("categories");
          return _.include(categories, categoryName);
        });

        var mail = new EmailCollection(filtered);
        deferred.resolve(mail);
      });

      return deferred.promise();
    },

    _getMail: function(callback) {
      var emailCollection = new EmailCollection();
      emailCollection.on("reset", callback);
      emailCollection.fetch();
    }
  };

  App.reqres.addHandler("email:entities", function() {
    return API.getAll();
  });

  App.reqres.addHandler("email:entity", function(id) {
    return API.getById(id);
  });

  App.reqres.addHandler("category:email:entities", function(categoryName) {
    return API.getByCategory(categoryName);
  });
});