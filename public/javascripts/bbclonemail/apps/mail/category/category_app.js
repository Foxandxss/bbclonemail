BBCloneMail.module("MailApp.Category", function (Category, App, Backbone, Marionette, $, _) {

  this.startWithParent = false;

  var API = {
    showCategoriesList: function() {
      Category.List.Controller.showCategories();
    }
  };

  Category.on("start", function() {
    API.showCategoriesList();
  });
});