declare module "protobuf-js-from-object";

import * as jspb from "google-protobuf";
export declare function serializeFromObject(
  msg: any,
  ProtoClass: typeof jspb.Message
): Uint8Array;
