BBCloneMail.module("MailApp.Show", function (Show, App, Backbone, Marionette, $, _) {

  Show.Controller = {

    showEmail: function(email) {
      this._showEmail(email);
    },

    showEmailById: function(id) {
      var func = _.bind(this._showEmail, this);

      $.when(App.request("email:entity", id))
        .then(func);
    },

    _showEmail: function(email) {
      var emailView = this._getEmailView(email);
      App.main.show(emailView);
    },

    _getEmailView: function(email) {
      return new Show.Email({
        model: email
      });
    }
  }
});