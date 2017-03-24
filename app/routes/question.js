import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    createAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    },

    updateQuestion(params, question) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question', question);
    },

    deleteQuestion(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        question.destroyRecord();
      });
      this.transitionTo('index');
    },

    updateAnswer(params, answer) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          answer.set(key, params[key]);
        }
      });
      console.log(params.timestamp);
      console.log(answer.timestamp);
      answer.save();
      this.transitionTo('question');
    }
  },
});
