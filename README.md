# protobuf-js-from-object

This project comes from the issue: https://github.com/protocolbuffers/protobuf/issues/1591

There is no fromObject implementation in google-protobuf implementation so I wrote a little bit hacky solution to serialize protobuf object.

## Examples

To run example, run the following command in `examples` folder:

    yarn start

## How to use it?

### Import in Typescript

```typescript
import { serializeFromObject } from "protobuf-js-from-object";
```

### Import in Javascript

```javascript
const { serializeFromObject } = require("protobuf-js-from-object");
```

### Usage

```typescript
const buffer: Uint8Array = serializeFromObject(obj, SomeProtoClass);
// Save into file or send it via network or whatever...
const classObj = SomeProtoClass.deserializeBinary(buffer);
const pureObj = classObj.toObject(false);
```
