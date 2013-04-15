BBCloneMail.module("ContactApp", {
  startWithParent: false,
  define: function (ContactApp, App, Backbone, Marionette, $, _) {

    var Router = Marionette.AppRouter.extend({
      before: function() {
        App.startSubApp("ContactApp", {});
      },

      appRoutes: {
        "contacts": "showContacts"
      }
    });

    var API = {
      showContacts: function () {
        ContactApp.List.Controller.showContacts();
      }
    };

    App.addInitializer(function () {
      new Router({
        controller: API
      });
    });

    ContactApp.addInitializer(function() {
      App.vent.trigger("app:started", "contacts");
    });
  }
});