// package: homepage
// file: homepage.proto

var homepage_pb = require("./homepage_pb");
var grpc = require("grpc-web-client").grpc;

var Homepage = (function () {
  function Homepage() {}
  Homepage.serviceName = "homepage.Homepage";
  return Homepage;
}());

Homepage.Window = {
  methodName: "Window",
  service: Homepage,
  requestStream: false,
  responseStream: false,
  requestType: homepage_pb.Empty,
  responseType: homepage_pb.WindowResponse
};

exports.Homepage = Homepage;

function HomepageClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HomepageClient.prototype.window = function window(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Homepage.Window, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.HomepageClient = HomepageClient;

