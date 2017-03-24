import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createQuestion() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        timestamp: moment(),
      };
      this.sendAction('createQuestion', params);
    },
  }
});
