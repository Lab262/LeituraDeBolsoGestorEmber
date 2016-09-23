import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  namespace: 'v0',
  host: config.apiBaseUrl,

  authManager: Ember.inject.service(),

  headers: Ember.coputed('authManager.token', function() {
    return {
      'x-access-token' : `${this.get("authManager.token")}`
    };
  })

});
