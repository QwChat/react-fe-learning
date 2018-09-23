// package: homepage
// file: homepage.proto

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class Nav extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Nav.AsObject;
  static toObject(includeInstance: boolean, msg: Nav): Nav.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Nav, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Nav;
  static deserializeBinaryFromReader(message: Nav, reader: jspb.BinaryReader): Nav;
}

export namespace Nav {
  export type AsObject = {
    name: string,
    image: string,
    url: string,
  }
}

export class Banner extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Banner.AsObject;
  static toObject(includeInstance: boolean, msg: Banner): Banner.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Banner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Banner;
  static deserializeBinaryFromReader(message: Banner, reader: jspb.BinaryReader): Banner;
}

export namespace Banner {
  export type AsObject = {
    title: string,
    image: string,
    url: string,
  }
}

export class WindowResponse extends jspb.Message {
  clearNavsList(): void;
  getNavsList(): Array<Nav>;
  setNavsList(value: Array<Nav>): void;
  addNavs(value?: Nav, index?: number): Nav;

  clearBannersList(): void;
  getBannersList(): Array<Banner>;
  setBannersList(value: Array<Banner>): void;
  addBanners(value?: Banner, index?: number): Banner;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WindowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WindowResponse): WindowResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WindowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WindowResponse;
  static deserializeBinaryFromReader(message: WindowResponse, reader: jspb.BinaryReader): WindowResponse;
}

export namespace WindowResponse {
  export type AsObject = {
    navsList: Array<Nav.AsObject>,
    bannersList: Array<Banner.AsObject>,
  }
}

