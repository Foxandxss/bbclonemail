BBCloneMail.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  "use strict";

  var Email = Backbone.Model.extend({
  });

  var EmailCollection = Backbone.Collection.extend({
    model: Email,
    url: "/email"
  });
});