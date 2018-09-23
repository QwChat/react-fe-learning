// package: category
// file: category.proto

import * as jspb from "google-protobuf";

export class CategoryItem extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryItem.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryItem): CategoryItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryItem;
  static deserializeBinaryFromReader(message: CategoryItem, reader: jspb.BinaryReader): CategoryItem;
}

export namespace CategoryItem {
  export type AsObject = {
    id: string,
    name: string,
    image: string,
    url: string,
  }
}

export class SectionCategory extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearCategoriesList(): void;
  getCategoriesList(): Array<CategoryItem>;
  setCategoriesList(value: Array<CategoryItem>): void;
  addCategories(value?: CategoryItem, index?: number): CategoryItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SectionCategory.AsObject;
  static toObject(includeInstance: boolean, msg: SectionCategory): SectionCategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SectionCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SectionCategory;
  static deserializeBinaryFromReader(message: SectionCategory, reader: jspb.BinaryReader): SectionCategory;
}

export namespace SectionCategory {
  export type AsObject = {
    id: string,
    type: string,
    name: string,
    categoriesList: Array<CategoryItem.AsObject>,
  }
}

export class SideItem extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SideItem.AsObject;
  static toObject(includeInstance: boolean, msg: SideItem): SideItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SideItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SideItem;
  static deserializeBinaryFromReader(message: SideItem, reader: jspb.BinaryReader): SideItem;
}

export namespace SideItem {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class CategoryListRequest extends jspb.Message {
  getSideid(): string;
  setSideid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryListRequest): CategoryListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryListRequest;
  static deserializeBinaryFromReader(message: CategoryListRequest, reader: jspb.BinaryReader): CategoryListRequest;
}

export namespace CategoryListRequest {
  export type AsObject = {
    sideid: string,
  }
}

export class CategoryListResponse extends jspb.Message {
  clearSideitemsList(): void;
  getSideitemsList(): Array<SideItem>;
  setSideitemsList(value: Array<SideItem>): void;
  addSideitems(value?: SideItem, index?: number): SideItem;

  clearSectioncategorylistList(): void;
  getSectioncategorylistList(): Array<SectionCategory>;
  setSectioncategorylistList(value: Array<SectionCategory>): void;
  addSectioncategorylist(value?: SectionCategory, index?: number): SectionCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryListResponse): CategoryListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CategoryListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryListResponse;
  static deserializeBinaryFromReader(message: CategoryListResponse, reader: jspb.BinaryReader): CategoryListResponse;
}

export namespace CategoryListResponse {
  export type AsObject = {
    sideitemsList: Array<SideItem.AsObject>,
    sectioncategorylistList: Array<SectionCategory.AsObject>,
  }
}

