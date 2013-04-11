BBCloneMail.module("Entities", function (Entities, App, Backbone, Marionette, $, _) {
  "use strict";

  var Category = Backbone.Model.extend({
  });

  var CategoryCollection = Backbone.Collection.extend({
    model: Category,
    url: "/categories"
  });

  var API = {

    getAll: function () {
      var deferred = $.Deferred();

      this._getCategories(function(categories) {
        deferred.resolve(categories);
      });

      return deferred.promise();
    },

    _getCategories: function(callback) {
      var categoriesCollection = new CategoryCollection();
      categoriesCollection.on("reset", callback);
      categoriesCollection.fetch();
    }
  };

  App.reqres.addHandler("categories:entities", function () {
    return API.getAll();
  })
});