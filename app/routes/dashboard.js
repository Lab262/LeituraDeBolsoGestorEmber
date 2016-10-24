import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  query: "",

  model() {
    let regex = { "$regex": this.query, "$options": "i" };
    var queryExpressions = { $or:[ {title:regex}, {content: regex}, {authorName: regex}] };
    return this.store.query('reading', queryExpressions);
  },

  actions: {
    search(query) {
      this.query = query;
      this.refresh();
    }
  }


});
