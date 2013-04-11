BBCloneMail.module("MailApp.Show", function (Show, App, Backbone, Marionette, $, _) {

  Show.Controller = {

    showEmail: function(email) {
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