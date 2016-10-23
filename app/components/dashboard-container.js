import Ember from 'ember';

export default Ember.Component.extend({

  readingInFocus: null,

  closeModal() {
    this.$('#reading-form-modal').closeModal();
    this.$('#reading-detail-modal').closeModal();

  },

  actions: {

    registerNewReading() {
      this.$('#reading-form-modal').openModal();

    },
    editAReading(readingModel) {

      this.set("readingInFocus",readingModel);
      console.log(readingModel);
      this.$('#reading-detail-modal').openModal();

    }

  },


});
