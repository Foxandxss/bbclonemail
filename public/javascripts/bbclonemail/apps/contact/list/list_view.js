BBCloneMail.module("ContactApp.List", function (List, App, Backbone, Marionette, $, _) {

  List.Contact = Marionette.ItemView.extend({
    template: "#contact-item-template",
    tagName: "li"
  });

  List.Contacts = Marionette.CollectionView.extend({
    itemView: List.Contact,
    tagName: "ul",
    id: "contact-list",
    className: "contact-list"
  });
});