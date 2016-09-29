import Ember from 'ember';

export default Ember.Component.extend({
  authManager: Ember.inject.service('session'),


  actions: {
    addReading() {
      // const { author, timeReading,reading  } = this.getProperties('author','timeReading','reading');

      //REPLACE BY REAL DATA FROM VIEW
      var newReading = this.store.createRecord('reading', {
        title: 'Deu bom na leitura',
        content: 'LEitura que deu muito certo',
        authorName: 'PErius',
        timeToReadInMinutes: 13
            });

      newReading.save().then(function() {
        console.log("deu bom");
      }).catch(function(err) {
        console.log(err);
        console.log("deu riom");
      });
    }
  }

});
