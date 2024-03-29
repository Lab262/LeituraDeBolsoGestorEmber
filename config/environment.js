/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'secretcodez',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    materializeDefaults: {
      modalIsFooterFixed:  false,
      buttonIconPosition:  'left',
      loaderSize:          'big',
      loaderMode:          'indeterminate',
      modalContainerId:    'materialize-modal-root-element',
      dropdownInDuration:  300,
      dropdownOutDuration: 300
    },



    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.apiBaseUrl = 'http://localhost:8080/api'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiBaseUrl = 'https://leituradebolso-production.herokuapp.com/api'

  }

  if (environment === 'staging') {
    ENV.apiBaseUrl = 'https://leituradebolso-stagging.herokuapp.com/api'

  }

  return ENV;
};
