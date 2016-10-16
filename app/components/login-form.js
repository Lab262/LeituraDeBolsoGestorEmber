import Ember from 'ember';

export default Ember.Component.extend({


  authManager: Ember.inject.service('session'),
  isLoading: false,
  errors: [],

  emailDidChange: Ember.observer('email', function() {
  const errors = this.get('errors');
  let messages = [];
  if (!Ember.isPresent(this.get('email'))) {
    messages = ['Campo necessário'];
  }
    errors.set('email', messages);
  }),

  passwordDidChange: Ember.observer('password', function() {
  const errors = this.get('errors');
  let messages = [];
  if (!Ember.isPresent(this.get('password'))) {
    messages = ['Campo necessário'];
  }
    errors.set('password', messages);
  }),

  actions: {
    authenticate() {
      this.set('isLoading', true);
      const { email, password } = this.getProperties('email','password');
      this.get('authManager').authenticate('authenticator:jwt',email, password).then(() => {
        this.set('isLoading', false);
        alert('Success! Click the top link!');
      }, (err) => {
        const errors = this.get('errors');
        this.set('isLoading', false);
        var errorObject = err.responseJSON.errors[0]
        var errorAttrbitue = errorObject.source.pointer.substring(16)
        errors.set(errorAttrbitue, [errorObject.detail]);

      });
    }
  }

});
