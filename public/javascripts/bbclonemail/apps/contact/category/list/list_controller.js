BBCloneMail.module("ContactApp.Category.List", function (List, App, Backbone, Marionette, $, _) {

  List.Controller = {
    showCategories: function() {
      var categoriesView = this._getCategoriesView();
      App.nav.show(categoriesView);
    },

    _getCategoriesView: function() {
      return new List.Categories();
    }
  }

});