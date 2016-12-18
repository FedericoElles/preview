var contentful = require('contentful');
var Q = require('q');
var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

var parser = {
  page: require('./content.page.js')
};

var client = contentful.createClient({
  space: process.env.SPACE,
  accessToken: process.env.ACCESS_TOKEN
});

var slugs = {};

var api = {};


function parseContent(json){
  json.forEach(function(content){
    //get type
    if (sys && sys.contentType && true){
      
    }
  });
}


api.get = function(x){
  var deferred = Q.defer();
  
  client.getEntries({
    'content_type': x
  })
  .then(function (entries) {
    // Only entries of the Blog Post content type
    console.log(entries);
    deferred.resolve(entries.items);
  });//.fail(function(err){
    //deferred.reject(err);
  //});
  return deferred.promise;
};



module.exports = api;