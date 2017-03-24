import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        timestamp: "Updated: " + moment().format('MMMM Do YYYY, h:mm:ss a'),
      };
      this.sendAction('updateQuestion', params, question);
    },

    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    }
  }
});
