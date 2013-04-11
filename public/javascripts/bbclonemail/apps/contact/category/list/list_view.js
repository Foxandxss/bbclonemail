BBCloneMail.module("ContactApp.Category.List", function (List, App, Backbone, Marionette, $, _) {

  List.Categories = Marionette.ItemView.extend({
    template: "#contact-categories-view-template"
  });
});