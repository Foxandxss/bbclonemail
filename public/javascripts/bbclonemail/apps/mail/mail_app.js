BBCloneMail.module("MailApp", {
  startWithParent: false,
  define: function (MailApp, App, Backbone, Marionette, $, _) {

    var Router = Marionette.AppRouter.extend({
      before: function () {
        App.startSubApp("MailApp", {});
      },

      appRoutes: {
        "": "showInbox",
        "mail": "showInbox",
        "mail/categories/:id": "showEmailByCategory",
        "mail/inbox/:id": "showEmailById"
      }
    });

    var API = {
      showInbox: function () {
        MailApp.List.Controller.showInbox();
      },
      showEmail: function (email) {
        MailApp.Show.Controller.showEmail(email);
      },
      showEmailById: function (id) {
        MailApp.Show.Controller.showEmailById(id);
      },
      showEmailByCategory: function (category) {
        MailApp.List.Controller.showByCategory(category);
      }
    };

    App.vent.on("email:selected", function (email) {
      API.showEmail(email);
      Backbone.history.navigate("mail/inbox/" + email.id);
    });

    App.vent.on("category:selected", function (category) {
      if (category) {
        API.showEmailByCategory(category);
        Backbone.history.navigate("mail/categories/" + category);
      } else {
        API.showInbox();
        Backbone.history.navigate("mail");
      }
    });

    App.addInitializer(function () {
      new Router({
        controller: API
      });

    });

    MailApp.addInitializer(function() {
      App.vent.trigger("app:started", "mail");
    });
  }
});