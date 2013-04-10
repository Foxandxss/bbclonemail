BBCloneMail.module("SelectorApp.Show", function (Show, App, Backbone, Marionette, $, _) {
  "use strict";

  Show.Controller = Marionette.Controller.extend({
    initialize: function() {
      App.vent.on("app:started", this._setCurrentApp, this);
    },

    onClose: function() {
      App.vent.off("app:started", this._setCurrentApp, this);
    },

    showAppSelector: function() {
      this.selectorView = this._getSelectorView();
      this.selectorView.on("app:selected", function(app) {
        Backbone.history.navigate(app, true);
      });
      App.appSelector.show(this.selectorView);
    },

    _getSelectorView: function() {
      return new SelectorView();
    },

    _setCurrentApp: function(appName) {
      this.selectorView.setCurrent(appName);
    }
  });
});