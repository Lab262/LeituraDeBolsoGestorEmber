
import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';


var host = config.apiBaseUrl,
namespace = 'v0',
loginUrl = [ host, namespace, 'auth/login'].join('/');


export default Base.extend({
    authenticate: function (email,password) {

        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax({
                url: loginUrl,
                type: 'POST',
                data: {
                    email: email,
                    password: password
                    },
                dataType: 'json'
            }).then(function(response/*, statusText, jqXHR*/) {
                Ember.run(function() {
                  resolve({ token : response.token });
                });
            }, function(jqXHR/*, textStatus, errorThrown*/) {

                Ember.run(function() {
                    reject(jqXHR);
                });
            });
        });
    },
    invalidate: function (data) {
        console.log('invalidate', data);
    }

});
