'use strict';

module.exports = function(sails) {

  // This var will be private
  // var foo = 'bar';

  // This var will be public
  // this.abc = 123;

  return {

    // Pause sails lifting until this hook has completed initializing
    // ready: false,

    // set up the options of your hook
    defaults: {},

    // do stuff before intialize the hook
    configure: function(){
      // configure should be implemented as a function with no arguments
      // and should not return any value.
    },

    // the logic of your hook
    initialize: function(done){
      return done();
    },

    routes: {
      before: {
        // example of a route
        'ALL /*': function (req, res, next) {
           console.log(this.numRequestsSeen++);
           return next();
        }
      },
      after: {
        // example of a route
        'GET /*': function (req, res, next) {
           this.numUnhandledRequestsSeen++;
           return next();
        }
      }
    }

  };
};
