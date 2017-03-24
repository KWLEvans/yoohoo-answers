import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createQuestion() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
      };
      this.sendAction('createQuestion', params);
    },
  }
});
