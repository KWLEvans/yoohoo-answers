import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createAnswer() {
      var params = {
        text: this.get('answer'),
        author: this.get('author'),
        timestamp: moment(),
        question: this.get('question'),
      };
      $("#answer-author").val("");
      $("#answer-answer").val("");
      this.sendAction('createAnswer', params);
    }
  },
});
