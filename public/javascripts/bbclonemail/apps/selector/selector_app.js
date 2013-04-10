BBCloneMail.module("SelectorApp", function (SelectorApp, App, Backbone, Marionette, $, _) {
  "use strict";

  this.startWithParent = false;

  var API = {
    showAppSelector: function () {
      var controller = new SelectorApp.Show.Controller();
      controller.showAppSelector();
    }
  };

  SelectorApp.on("start", function () {
    API.showAppSelector();
  });

});