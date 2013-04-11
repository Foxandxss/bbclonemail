BBCloneMail.module("Entities", function (Entities, App, Backbone, Marionette, $, _) {
  "use strict";

  var Category = Backbone.Model.extend({
  });

  var CategoryCollection = Backbone.Collection.extend({
    model: Category,
    url: "/categories"
  });

  var API = {

    getAllCategories: function () {
      var deferred = $.Deferred();

      var categoryCollection = new CategoryCollection();
      categoryCollection.on("reset", function(categories) {
        deferred.resolve(categories);
      });

      categoryCollection.fetch();
      return deferred.promise();
    }
  };

  App.reqres.addHandler("categories:entities", function () {
    return API.getAllCategories();
  })
});