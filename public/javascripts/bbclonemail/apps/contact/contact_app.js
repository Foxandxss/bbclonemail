BBCloneMail.module("ContactApp", function (ContactApp, App, Backbone, Marionette, $, _) {

  ContactApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "contacts": "showContacts"
    },

    after: function() {
      App.vent.trigger("app:started", "contacts");
    }
  });

  var API = {
    showContacts: function() {
      ContactApp.List.Controller.showContacts();
    }
  };

  App.addInitializer(function() {
    new ContactApp.Router({
      controller: API
    });
  });
});