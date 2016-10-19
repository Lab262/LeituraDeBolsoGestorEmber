import Ember from 'ember';

export default Ember.Component.extend({
  reading : {'Title': 'agora foi', 'Author': 'Nois', 'Content' : 'Agora foi uai carai'},

  actions: {
    debug: function(reading) {

      console.log(reading);
      console.log('vai');

    },

    toggleBody: function(reading) {
      console.log(reading);
      console.log('delete');
    },

    changeReadingOfTheWeek: function(isChecke) {
      console.log(this.reading);
      console.log('foi');
    }
  }

});
