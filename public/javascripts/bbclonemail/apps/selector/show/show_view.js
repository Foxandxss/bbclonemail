BBCloneMail.module("SelectorApp.Show", function (Show, App, Backbone, Marionette, $, _) {

  SelectorView = Marionette.ItemView.extend({
    template: "#app-selector-template",
    tagName: "select",

    events: {
      "change": "appSelected"
    },

    appSelected: function(e) {
      e.preventDefault();

      var name = $(e.currentTarget).val();
      this.trigger("app:selected", name);
    },

    setCurrent: function(appName) {
      this.$("[value=" + appName + "]").attr("selected", "selected");
    }
  });

});