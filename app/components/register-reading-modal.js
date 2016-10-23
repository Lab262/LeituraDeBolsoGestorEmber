import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({

  readingTypes: ["Leitura lenta (100 palavras/minuto)", "Leitura média (130 palavras/minuto)", "Leitura rápida (160 palavras/minuto)"],
  errors: [],
  store: Ember.inject.service(),

  readingTimeInMinutes: Ember.computed('readingTypes','readingSelectedType','content', function() {
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
  }),

  countWords(string){
    string = string.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    string = string.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    string = string.replace(/\n /,"\n"); // exclude newline with a start spacing
    return string.split(' ').length;
  },

  calcReadingTime(wordPerMinute, numberOfWordsInReading) {
    let readingTime = Math.round( ( (numberOfWordsInReading * 60) / wordPerMinute ) / 60 );

    if (readingTime == 0) {

      readingTime = 1;
    }

    return readingTime;
  },

  clearForm() {
    this.set('title',"");
    this.set('authorName',"");
    this.set('content',"");
    this.set('readOfTheDay',false);
    this.set('readingTimeInMinutes', 1);

  },

  validateField(object, value) {
    var errors = this.get('errors');

    if (object == null || !object.trim()) {
      errors.set(value,['Campo necessário']);
      alert(value + ' é um campo obrigatório')
      return false;
    } else {
      errors.set(value,null);
      return true;
    }
  },

  actions: {

    closeModal() {
      this.clearForm()
      this.closeModalAction()

    },

    submitForm() {

      let title = this.get('title');
      let authorName = this.get('authorName');
      let content = this.get('content');
      let readOfTheDay = this.get('readOfTheDay');
      let timeToReadInMinutes = this.get('readingTimeInMinutes');

      var validFieldsCount = 0;
      validFieldsCount += this.validateField(title,'Título');
      validFieldsCount += this.validateField(authorName,'Autor');
      validFieldsCount += this.validateField(content,'Conteúdo');

      if (validFieldsCount < 3) {
        return;
      }

      var newReading = this.get('store').createRecord('reading', {
       title: title,
       authorName: authorName,
       content: content,
       readOfTheDay: readOfTheDay,
       timeToReadInMinutes: timeToReadInMinutes
     });

     newReading.save();

      this.clearForm()
      this.closeModalAction()
    }

  }

});
