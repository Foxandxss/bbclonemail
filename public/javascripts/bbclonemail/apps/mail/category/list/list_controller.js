BBCloneMail.module("MailApp.Category.List", function (List, App, Backbone, Marionette, $, _) {

  List.Controller = {
    showCategories: function() {
      var func = _.bind(this._showCategories, this);

      $.when(App.request("categories:entities"))
        .then(func);
    },

    _showCategories: function(categories) {
      var listView = this._getCategoriesListView(categories);
      listView.on("category:selected", function(category) {
        App.vent.trigger("category:selected", category);
      });
      App.nav.show(listView);
    },

    _getCategoriesListView: function(categories) {
      return new List.Categories({
        collection: categories
      });
    }
  }

});