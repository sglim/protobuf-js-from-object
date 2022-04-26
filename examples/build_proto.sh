# Prerequisite: protoc compiler, yarn install

protoc \
    --js_out="import_style=commonjs,binary:proto" \
    --proto_path=proto proto/*.proto
