BBCloneMail.module("MailApp.Category.List", function (List, App, Backbone, Marionette, $, _) {

  List.Categories = Marionette.ItemView.extend({
    template: "#mail-categories-view-template",

    events: {
      "click .mail-category": "mailCategoryClicked"
    },

    mailCategoryClicked: function(e) {
      e.preventDefault();

      var category = $(e.currentTarget).data("category");
      this.trigger("category:selected", category);
    }
  });

});