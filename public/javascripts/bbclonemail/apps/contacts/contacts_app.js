BBCloneMail.module("ContactsApp", function (ContactsApp, App, Backbone, Marionette, $, _) {

  ContactsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "contacts": "showContacts"
    },

    after: function() {
      App.vent.trigger("app:started", "contacts");
    }
  });

  var API = {
    showContacts: function() {
      console.log("we are on contacts");
    }
  };

  App.addInitializer(function() {
    new ContactsApp.Router({
      controller: API
    });
  });
});