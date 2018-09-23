// package: homepage
// file: homepage.proto

import * as homepage_pb from "./homepage_pb";
import {grpc} from "grpc-web-client";

type HomepageWindow = {
  readonly methodName: string;
  readonly service: typeof Homepage;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof homepage_pb.Empty;
  readonly responseType: typeof homepage_pb.WindowResponse;
};

export class Homepage {
  static readonly serviceName: string;
  static readonly Window: HomepageWindow;
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

export class HomepageClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  window(
    requestMessage: homepage_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: homepage_pb.WindowResponse|null) => void
  ): void;
  window(
    requestMessage: homepage_pb.Empty,
    callback: (error: ServiceError, responseMessage: homepage_pb.WindowResponse|null) => void
  ): void;
}

