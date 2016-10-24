import Ember from 'ember';

export default Ember.Component.extend({

  readOfTheDayDidChange: Ember.observer('model.readOfTheDay', function() {
  // deal with the change
    this.model.save();
  }),

  actions: {
    editReading: function() {

      this.editReadingAction(this.model);
    },

    deleteReading: function() {
      if (confirm('Você tem certeza que quer deletar essa leitura???')) {
        this.model.destroyRecord();
      }
    }

  }

});
