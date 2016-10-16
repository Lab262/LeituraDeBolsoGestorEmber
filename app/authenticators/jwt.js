
import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';


var host = config.apiBaseUrl,
namespace = 'v0',
loginUrl = [ host, namespace, 'auth/adminLogin'].join('/');


export default Base.extend({
    authenticate: function (email,password) {

        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax({
                url: loginUrl,
                type: 'POST',
                contentType: "application/json;charset=utf-8",
                dataType: 'json',
                data: JSON.stringify({
                    email: email,
                    password: password
                  })
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

    restore: function (data){
        return new Ember.RSVP.Promise(function(resolve,reject) {
            if (!Ember.isEmpty(data.token)){
              resolve(data);
            }else {
              reject();

            }
        });

    },

    invalidate: function (data) {
        console.log('invalidate', data);
    }

});
