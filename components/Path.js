const app_name = 'shreddit-ucf'

exports.apiCall = function apiCall(endpoint, json, method) {
  
  var call = {
      
    method: method ? method : "POST",
    url: this.buildPath(endpoint),

    headers: {
      "Content-Type": "application/json",
    },

    data: json
  };

  console.log(call);

  return call;
}

exports.buildPath = function buildPath(route) {

  return process.env.NODE_ENV === 'production' ?
    'https://' + app_name +  '.herokuapp.com/' + route :
    'https://' + app_name +  '.herokuapp.com/' + route
}