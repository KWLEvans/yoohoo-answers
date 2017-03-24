import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  content: DS.attr('string'),
  timestamp: DS.attr('string'),
  answers: DS.hasMany('answer', { async: true }),
});
