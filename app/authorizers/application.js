import Base from 'ember-simple-auth/authorizers/base';
import Ember from 'ember';

export default Base.extend({

  session: Ember.inject.service(),

  authorize(data, block) {
    const  accessToken  = data.token;
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
      block(
      'x-access-token', accessToken,  'Content-type', 'application/json'
          );
   }
  }
});
