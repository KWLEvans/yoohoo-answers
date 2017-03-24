import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },

    updateQuestion(params, question) {
      this.set('editQuestionForm', false);
      this.sendAction('updateQuestion', params, question);
    },

    deleteQuestion(question) {
      this.set('editQuestionForm', false);
      this.sendAction('deleteQuestion', question);
    }
  },
});
