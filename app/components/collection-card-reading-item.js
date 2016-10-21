import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    editReading: function() {

      console.log(this.model);
      console.log('vai');

    },

    deleteReading: function() {
      if (confirm('Você tem certeza que quer deletar essa leitura???')) {
        this.model.destroyRecord().then(() => {
        }).catch((reason) => {
          alert(reason);
        });
      }
    },

    changeReadingOfTheDay: function(isChecke) {
      console.log(this.model);
      this.model.set('readOfTheDay',true);
      this.model.save();
      console.log('foi');
    }
  }

});
