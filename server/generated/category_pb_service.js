// package: category
// file: category.proto

var category_pb = require("./category_pb");
var grpc = require("grpc-web-client").grpc;

var Category = (function () {
  function Category() {}
  Category.serviceName = "category.Category";
  return Category;
}());

Category.CategoryList = {
  methodName: "CategoryList",
  service: Category,
  requestStream: false,
  responseStream: false,
  requestType: category_pb.CategoryListRequest,
  responseType: category_pb.CategoryListResponse
};

exports.Category = Category;

function CategoryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CategoryClient.prototype.categoryList = function categoryList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Category.CategoryList, {
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

exports.CategoryClient = CategoryClient;

