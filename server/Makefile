
# Path to this plugin 
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
 
# Directory to write generated code to (.js and .d.ts files)  
OUT_DIR="./generated"

protobuf:
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--js_out="import_style=commonjs,binary:${OUT_DIR}" \
		--ts_out="service=true:${OUT_DIR}" \
		-I ../apidoc \
		../apidoc/homepage.proto ../apidoc/category.proto ../apidoc/product.proto