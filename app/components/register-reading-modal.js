import Ember from 'ember';

export default Ember.Component.extend({

  readingTypes: ["Leitura lenta (100 palavras/minuto)", "Leitura média (130 palavras/minuto)", "Leitura rápida (160 palavras/minuto)"],

  readingTime: function() {
    let readingTypes = this.get('readingTypes')
    let readingSelectedType = (this.get('readingSelectedType') != null ? this.get('readingSelectedType') : "Leitura lenta (100 palavras/minuto)")
    let readingContent = (this.get('content') != null ? this.get('content') : " ")

    let numberOfWordsInReading = this.countWords(readingContent)


    switch(readingTypes.indexOf(readingSelectedType)) {
      case 0:
        return this.calcReadingTime(100,numberOfWordsInReading)

      case 1:
      return this.calcReadingTime(130,numberOfWordsInReading)

      case 2:
      return this.calcReadingTime(160,numberOfWordsInReading)
    }
  }.property('readingTypes','readingSelectedType','content'),

  closeModalAction() {

    var closeModalAction = this.get('closeModalAction');
    if (closeModalAction) {
      closeModalAction();
    }
  },

  registerNewReading() { console.log("registernew")},

  countWords(string){
    string = string.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    string = string.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    string = string.replace(/\n /,"\n"); // exclude newline with a start spacing
    return string.split(' ').length;
  },

  calcReadingTime(wordPerMinute, numberOfWordsInReading) {
    return Math.round( (numberOfWordsInReading * 60) / wordPerMinute );
  },

  actions: {

    changeReadingType() {
      console.log("changed")
    },

    closeModal() {
      this.closeModalAction()

    },

    submitForm() {

      this.registerNewReading()
      this.closeModalAction()
    }

  }

});
