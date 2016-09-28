import Ember from 'ember';

export default Ember.Component.extend({
  authManager: Ember.inject.service('session'),


  actions: {
    addReading() {
      const { author, timeReading,reading  } = this.getProperties('author','timeReading','reading');


      var newReading = this.store.createRecord('reading', {
        title: 'Deu bom na leitura',
        content: 'LEitura que deu muito certo',
        authorName: 'PErius',
        timeToReadInMinutes: 13
            });

      newReading.save();
      // console.log(newReading.author)

      console.log(newReading.get('timeToReadInMinutes'))

      newReading.save().then(function() {
        console.log("deu bom");
      }).catch(function(err) {
        console.log(err)
        console.log("deu riom")
      });


        //alert(author);
        //alert(timeReading);
        //alert(reading);
        //console.log("entrou aqui");
        //print("thiago estava certo ou não??");
    }
  }

});
