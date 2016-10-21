import Ember from 'ember';

export default Ember.Component.extend({

  isNewReading: false,

  closeModalAction() {

    var closeModalAction = this.get('closeModalAction');
    if (closeModalAction) {
      closeModalAction();
    }
  },

  registerNewReading() { console.log("registernew")},

  editAReading() {console.log("edit a reading")},


  actions: {

    closeModal() {
      this.closeModalAction()

    },

    submitForm() {
      if(this.isNewReading) {

        this.registerNewReading()
      } else {

        this.editAReading()
      }

      this.closeModalAction()
    }

  }

});
