import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {

  query: "",
  perPageParam: "limit",              // instead of "per_page"
  pageParam: "page",
  totalPagesParam: "meta.total_pages",    // instead of "meta.total_pages"

  model() {

    let regex = { "$regex": this.query, "$options": "i" };
    var queryExpressions = {
      perPage: 12,
      startingPage: 1,
      $or:[
        {title:regex},
        {content: regex},
        {authorName: regex}
      ]
      }

    return this.infinityModel('reading', queryExpressions);
  },

  actions: {
    search(query) {
      this.query = query;
      this.refresh();
    }
  }
})
