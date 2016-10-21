import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
$(document).ready(function(){
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
});
Router.map(function() {
  this.route('dashboard', {
    path: '/'
  });
  this.route('login');
  this.route('read-time-calc');
});



export default Router;
