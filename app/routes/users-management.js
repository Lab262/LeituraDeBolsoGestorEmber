import Ember from 'ember';

export default Ember.Route.extend({

  query: "",

  model() {

    var queryExpressions = { email: { "$regex": this.query, "$options": "i" }  };
    return this.store.query('user', queryExpressions);
  },

  actions: {
    search(query) {
      this.query = query;
      this.refresh();
    }
  }

});
