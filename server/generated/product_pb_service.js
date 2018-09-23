// package: product
// file: product.proto

var product_pb = require("./product_pb");
var grpc = require("grpc-web-client").grpc;

var Product = (function () {
  function Product() {}
  Product.serviceName = "product.Product";
  return Product;
}());

Product.ProductList = {
  methodName: "ProductList",
  service: Product,
  requestStream: false,
  responseStream: false,
  requestType: product_pb.ProductListRequest,
  responseType: product_pb.ProductListResponse
};

exports.Product = Product;

function ProductClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProductClient.prototype.productList = function productList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Product.ProductList, {
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

exports.ProductClient = ProductClient;

