declare module "protobuf-js-from-object";

import * as jspb from "google-protobuf";
export declare function serializeFromObject<T>(
  msg: T.AsObject,
  ProtoClass: typeof jspb.Message
): Uint8Array;
