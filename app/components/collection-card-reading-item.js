import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    editReading: function() {

      this.editReadingAction(this.model);
    },

    deleteReading: function() {
      if (confirm('Você tem certeza que quer deletar essa leitura???')) {
        this.model.destroyRecord();
      }
    },

    changeReadingOfTheDay: function() {
      this.model.set('readOfTheDay',true);
      this.model.save();
    }
  }

});
