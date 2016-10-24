import Ember from 'ember';

export default Ember.Component.extend({

  query: "",

  queryDidChange: Ember.observer('query', function() {
    this.searchAction(this.query);
  })

});
