// package: category
// file: category.proto

import * as category_pb from "./category_pb";
import {grpc} from "grpc-web-client";

type CategoryCategoryList = {
  readonly methodName: string;
  readonly service: typeof Category;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof category_pb.CategoryListRequest;
  readonly responseType: typeof category_pb.CategoryListResponse;
};

export class Category {
  static readonly serviceName: string;
  static readonly CategoryList: CategoryCategoryList;
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

export class CategoryClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  categoryList(
    requestMessage: category_pb.CategoryListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: category_pb.CategoryListResponse|null) => void
  ): void;
  categoryList(
    requestMessage: category_pb.CategoryListRequest,
    callback: (error: ServiceError, responseMessage: category_pb.CategoryListResponse|null) => void
  ): void;
}

