import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serializeAttribute(snapshot, json, key, attribute) {
    // do not serialize the attribute!
    console.log("SERIA LIZEI EITA")
    if (attribute.options && attribute.options.readOnly) {
      return;
    }
    this._super(...arguments);
  },
});
