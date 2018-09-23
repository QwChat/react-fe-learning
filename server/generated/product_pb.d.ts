// package: product
// file: product.proto

import * as jspb from "google-protobuf";

export class ProductItem extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getPrice(): string;
  setPrice(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductItem.AsObject;
  static toObject(includeInstance: boolean, msg: ProductItem): ProductItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductItem;
  static deserializeBinaryFromReader(message: ProductItem, reader: jspb.BinaryReader): ProductItem;
}

export namespace ProductItem {
  export type AsObject = {
    id: number,
    price: string,
    title: string,
    url: string,
    image: string,
  }
}

export class ProductListRequest extends jspb.Message {
  getShopid(): string;
  setShopid(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductListRequest): ProductListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductListRequest;
  static deserializeBinaryFromReader(message: ProductListRequest, reader: jspb.BinaryReader): ProductListRequest;
}

export namespace ProductListRequest {
  export type AsObject = {
    shopid: string,
    limit: number,
    offset: number,
  }
}

export class ProductListResponse extends jspb.Message {
  clearProductsList(): void;
  getProductsList(): Array<ProductItem>;
  setProductsList(value: Array<ProductItem>): void;
  addProducts(value?: ProductItem, index?: number): ProductItem;

  getTotal(): number;
  setTotal(value: number): void;

  getShopid(): string;
  setShopid(value: string): void;

  getShopname(): string;
  setShopname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductListResponse): ProductListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductListResponse;
  static deserializeBinaryFromReader(message: ProductListResponse, reader: jspb.BinaryReader): ProductListResponse;
}

export namespace ProductListResponse {
  export type AsObject = {
    productsList: Array<ProductItem.AsObject>,
    total: number,
    shopid: string,
    shopname: string,
  }
}

