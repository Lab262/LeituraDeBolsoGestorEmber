import Ember from 'ember';

export default Ember.Component.extend({

  userIsAdminDidChange: Ember.observer('user.isAdmin', function() {
  // deal with the change
    this.user.save();
  })

});
