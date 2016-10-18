import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('collection-card-reading-item', 'Integration | Component | collection card reading item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{collection-card-reading-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#collection-card-reading-item}}
      template block text
    {{/collection-card-reading-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
