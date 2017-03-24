import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  author: DS.attr('string'),
  timestamp: DS.attr('string'),
  question: DS.belongsTo('question', { async: true }),
});
