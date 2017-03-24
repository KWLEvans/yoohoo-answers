import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateAnswer(answer) {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        timestamp: "Updated: " + moment().format('MMMM Do YYYY, h:mm:ss a'),
      };
      this.sendAction('updateAnswer', params, answer);
    },

    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    }
  }
});
