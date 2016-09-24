import DS from 'ember-data';
import config from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin,{
  namespace: 'v0',
  host: config.apiBaseUrl,
  authorizer: 'authorizer:application'
});
