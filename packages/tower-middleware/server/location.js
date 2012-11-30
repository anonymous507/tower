
Tower.MiddlewareLocation = function(request, response, next) {
  var url;
  response.cacheControl || (response.cacheControl = {});
  if (!request.location) {
    if (request.url.match(/^http/)) {
      url = request.url;
    } else {
      url = "http://" + request.headers.host + request.url;
    }
    request.location = new Tower.NetUrl(url);
  }
  return next();
};
