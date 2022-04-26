const jspb = require("google-protobuf");

function appendGetter(msg, depth = 0) {
  if (typeof msg !== "object") {
    return msg;
  }
  const cloned = Object.assign({}, msg);
  const keys = Object.keys(cloned);
  keys.forEach((key) => {
    const value = cloned[key];
    if (typeof value === "function") {
      return;
    }
    const getterFunctionName = `get${key[0].toUpperCase()}${key.substring(1)}`;
    cloned[getterFunctionName] = function () {
      return this[key];
    };
    if (Array.isArray(value)) {
      cloned[key] = value.map((elem) => appendGetter(elem, depth + 1));
    } else if (typeof value === "object") {
      cloned[key] = appendGetter(value, depth + 1);
    }
  });
  return cloned;
}

/**
 * Serialize protobuf message fromObject
 *
 * @param {any} protoObject
 * @param {typeof require('google-protobuf').Message} ProtoClass
 * @returns Uint8Array
 */
function serializeFromObject(protoObject, ProtoClass) {
  const writer = new jspb.BinaryWriter();
  ProtoClass.serializeBinaryToWriter(appendGetter(protoObject), writer);
  return writer.getResultBuffer();
}

exports.serializeFromObject = serializeFromObject;
