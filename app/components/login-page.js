import Ember from 'ember';

export default Ember.Component.extend({


  authManager: Ember.inject.service('session'),

  actions: {
    authenticate() {
      const { email, password } = this.getProperties('email','password');
      this.get('authManager').authenticate('authenticator:jwt',email, password).then(() => {
        alert('Success! Click the top link!');
      }, (err) => {
        alert('Error obtaining token: ' + err.responseText);
      });
    }
  }

});
