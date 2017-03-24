import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('question', newQuestion);
    },
  }
});
