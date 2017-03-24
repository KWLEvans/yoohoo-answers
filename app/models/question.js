import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  content: DS.attr('string'),
  timestamp: DS.attr('date'),
  edited: DS.attr('boolean', { defaultValue: false }),
  date: Ember.computed('timestamp', 'edited', function() {
    var date = "";
    if (this.get('edited')) {
      date += "Updated: ";
    }
    date += moment(this.get('timestamp')).format('MMMM Do YYYY, h:mm:ss a');
    return date;
  }),
  answers: DS.hasMany('answer', { async: true }),
});
