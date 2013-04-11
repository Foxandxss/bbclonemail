BBCloneMail.module("MailApp", function (MailApp, App, Backbone, Marionette, $, _) {

  MailApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "": "showInbox",
      "mail": "showInbox",
//      "mail/categories/:id": "showMailByCategory",
      "mail/inbox/:id": "showEmail"
    },

    after: function() {
      App.vent.trigger("app:started", "mail");
    }
  });

  var API = {
    showInbox: function() {
      MailApp.List.Controller.showInbox();
    },
    showEmail: function(email) {
      MailApp.Show.Controller.showEmail(email);
    }
  };

  App.vent.on("email:selected", function(email) {
    API.showEmail(email);
    Backbone.history.navigate("mail/inbox/" + email.id);
  });

  App.addInitializer(function() {
    new MailApp.Router({
      controller: API
    });
  });
});