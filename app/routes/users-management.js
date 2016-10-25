import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute,{

  query: "",
  perPageParam: "limit",              // instead of "per_page"
  pageParam: "page",
  totalPagesParam: "meta.total_pages",

  model() {

    let regex = { "$regex": this.query, "$options": "i" };
    var queryExpressions = {
      perPage: 15,
      startingPage: 1,
      $or:[
        {email:regex}
      ]};
    return this.infinityModel('user', queryExpressions);
    // var queryExpressions = { email: { "$regex": this.query, "$options": "i" }  };
    // return this.store.query('user', queryExpressions);
  },

  actions: {
    search(query) {
      this.query = query;
      this.refresh();
    }
  }

});
