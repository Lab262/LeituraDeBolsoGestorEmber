import Ember from 'ember';

export default Ember.Component.extend({

  isNewReading: false,
  readingInFocus: null,

  closeModal() {
    this.$('#reading-form-modal').closeModal();

  },

  actions: {

    registerNewReading() {
      this.set('isNewReading',true);
      this.$('#reading-form-modal').openModal();

    },
    editAReading(readingModel) {

      this.set("readingInFocus",readingModel);
      console.log(readingModel);
      this.set('isNewReading',false);
      this.$('#reading-form-modal').openModal();

    }

  },


});
