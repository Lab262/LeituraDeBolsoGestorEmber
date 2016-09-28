import DS from 'ember-data';


export default DS.JSONAPISerializer.extend({

  serialize: (snapshot, options) {
    console.log("DAOSIDOAISDOISAD")

    var json = {
      title: snapshot.attr('title')
    }

    return json
  }

});
