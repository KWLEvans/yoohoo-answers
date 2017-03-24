import Ember from 'ember';

export default Ember.Component.extend({
  editAnswerForm: false,
  actions: {
    editAnswerForm() {
      this.set('editAnswerForm', true);
    },

    updateAnswer(params, answer) {
      this.set('editAnswerForm', false);
      this.sendAction('updateAnswer', params, answer);
    }
  }
});
