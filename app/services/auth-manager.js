import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({

  token: null,

  authenticate(email, password) {

    var host = config.apiBaseUrl,
    namespace = 'v0',
    loginUrl = [ host, namespace, 'auth/login'].join('/');

    return Ember.$.ajax({
      method: "POST",
      crossDomain: true,
      url: loginUrl,
      data: { email: email, password: password }
    }).then((result) => {
      this.set('token', result.token);
    });
  },

  invalidate() {
    this.set('token', null);
  },

  isAuthenticated: Ember.computed.bool('token')

});
