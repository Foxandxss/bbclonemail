BBCloneMail.module("MailApp.Show", function (Show, App, Backbone, Marionette, $, _) {

  Show.Email = Marionette.ItemView.extend({
    template: "#email-view-template",
    tagName: "ul",
    className: "email-list"
  });

});