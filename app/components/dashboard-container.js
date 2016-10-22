import Ember from 'ember';

export default Ember.Component.extend({

  isNewReading: false,

  closeModal() {
    $('#reading-form-modal').closeModal();

  },

  actions: {

    registerNewReading() {
      this.set('isNewReading',true)
      $('#reading-form-modal').openModal();

    },
    editAReading() {

      this.set('isNewReading',false)
    }

  },


});
