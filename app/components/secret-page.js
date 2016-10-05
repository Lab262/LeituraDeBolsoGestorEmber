import Ember from 'ember';

export default Ember.Component.extend({
  authManager: Ember.inject.service('session'),


  actions: {
    addReading() {
      const { author, timeReading,reading,title} = this.getProperties('author','timeReading','reading','title');

        //REPLACE BY REAL DATA FROM VIEW
        var newReading = this.store.createRecord('reading', {
          title: title,
          content: reading,
          authorName: author,
          timeToReadInMinutes: timeReading

        });

        newReading.save().then(function() {
          console.log("deu bom");
        }).catch(function(err) {
          console.log(err);
          console.log("deu ruim");
        });
      },

      deleteReading: function(reading) {
        if (confirm('Você tem certeza que quer deletar essa leitura???')) {
          reading.destroyRecord().then(() => {
            window.location.reload(true);
              this.get('target.router').refresh();
          }).catch((reason) => {
            destroyRecord.reload();
          });
        }
      }
    }




});
