var contentful = require('contentful');
var Q = require('q');

var client = contentful.createClient({
  space: process.env.SPACE,
  accessToken: process.env.ACCESS_TOKEN
});



var api = {};


api.get = function(x){
  var deferred = Q.defer();
  
  client.getEntries({
    'content_type': x
  })
  .then(function (entries) {
    // Only entries of the Blog Post content type
    console.log(entries);
    deferred.resolve(entries.items);
  }).fail(function(err){
    deferred.reject(err);
  });
  return deferred;
};



module.exports = api;