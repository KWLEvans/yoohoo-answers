import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  author: DS.attr('string'),
  timestamp: DS.attr('string'),
  edited: DS.attr('boolean', { defaultValue: false }),
  date: Ember.computed('timestamp', 'edited', function() {
    var date = "";
    if (this.get('edited')) {
      date += "Updated: ";
    }
    date += moment(this.get('timestamp')).format('MMMM Do YYYY, h:mm:ss a');
    return date;
  }),
  question: DS.belongsTo('question', { async: true }),
});
