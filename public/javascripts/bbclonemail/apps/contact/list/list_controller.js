BBCloneMail.module("ContactApp.List", function (List, App, Backbone, Marionette, $, _) {

  List.Controller = {
    showContacts: function() {
      var func = _.bind(this._showContacts, this);

      $.when(App.request("contacts:entities"))
        .then(func);
    },

    _showContacts: function(contacts) {
      var contactsView = this._getContactsView(contacts);
      console.log(contactsView);
      App.main.show(contactsView);
    },

    _getContactsView: function(contacts) {
      return new List.Contacts({
        collection: contacts
      });
    }
  }

});