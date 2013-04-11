BBCloneMail.module("MailApp.List", function (List, App, Backbone, Marionette, $, _) {

  List.Controller = {
    showInbox: function() {
      var func = _.bind(this._showMailList, this);

      $.when(App.request("email:entities"))
        .then(func);
    },

    showByCategory: function(category) {
      var func = _.bind(this._showMailList, this);

      $.when(App.request("category:email:entities", category))
        .then(func);
    },

    _showMailList: function(emails) {
      var emailListView = this._getEmailListView(emails);
      emailListView.on("email:selected", function(view) {
        App.vent.trigger("email:selected", view.model);
      });
      App.main.show(emailListView);
    },

    _getEmailListView: function(emails) {
      return new List.Emails({
        collection: emails
      });
    }
  }

});