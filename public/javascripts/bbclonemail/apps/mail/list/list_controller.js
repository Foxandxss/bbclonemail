BBCloneMail.module("MailApp.List", function (List, App, Backbone, Marionette, $, _) {

  List.Controller = {
    showInbox: function() {

      var func = _.bind(this._showMailList, this);

      $.when(App.request("all:email:entities"))
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