BBCloneMail.module("MailApp.List", function (List, App, Backbone, Marionette, $, _) {

  List.Email = Marionette.ItemView.extend({
    template: "#email-preview-template",
    tagName: "li",

    triggers: {
      "click": "selected"
    }
  });

  List.Emails = Marionette.CollectionView.extend({
    tagName: "ul",
    className: "email-list",
    itemViewEventPrefix: "email",
    itemView: List.Email
  });

});