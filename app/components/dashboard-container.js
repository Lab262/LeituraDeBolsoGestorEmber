import Ember from 'ember';

export default Ember.Component.extend({
  readingFormModal: {isShowing: false, isNewReading: false},

  closeModal() {
    this.set('readingFormModal.isShowing',false)

  },

  actions: {

    registerNewReading() {
      this.set('readingFormModal.isShowing',true)
      this.set('readingFormModal.isNewReading',true)
    },
    editAReading() {
      this.set('readingFormModal.isShowing',true)
      this.set('readingFormModal.isNewReading',false)
    }

  },


});
