import Ember from 'ember';

export default Ember.Route.extend({

    session: Ember.inject.service(),

    beforeModel: function(transition) {
    if (this.get('session.isAuthenticated')) {
      return this.transitionTo('secret');
    }
  }
});
