import DS from 'ember-data';
//import attr from 'ember-data/attr';

export default DS.Model.extend({
  title: DS.attr('string'),
  authorName: DS.attr('string'),
  content: DS.attr('string'),
  readOfTheDay: DS.attr('boolean'),
  timeToReadInMinutes: DS.attr('number')
});
