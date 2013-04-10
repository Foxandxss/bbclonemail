BBCloneMail.module("MailApp", function (MailApp, App, Backbone, Marionette, $, _) {

  MailApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "": "showInbox"
    },

    after: function() {
      App.vent.trigger("app:started", "mail");
    }
  });

  var API = {
    showInbox: function() {
//      MailApp.List.Controller.showInbox();
    }
  };

  App.addInitializer(function() {
    new MailApp.Router({
      controller: API
    });
  });
});