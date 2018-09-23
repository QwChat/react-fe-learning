// package: product
// file: product.proto

import * as product_pb from "./product_pb";
import {grpc} from "grpc-web-client";

type ProductProductList = {
  readonly methodName: string;
  readonly service: typeof Product;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_pb.ProductListRequest;
  readonly responseType: typeof product_pb.ProductListResponse;
};

export class Product {
  static readonly serviceName: string;
  static readonly ProductList: ProductProductList;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor; debug?: boolean }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class ProductClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  productList(
    requestMessage: product_pb.ProductListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: product_pb.ProductListResponse|null) => void
  ): void;
  productList(
    requestMessage: product_pb.ProductListRequest,
    callback: (error: ServiceError, responseMessage: product_pb.ProductListResponse|null) => void
  ): void;
}

