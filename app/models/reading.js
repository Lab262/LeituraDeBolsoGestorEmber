import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  _id: DS.attr('string'),
  content: DS.attr('string')
});
