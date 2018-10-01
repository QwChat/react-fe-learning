
genServices:
	protoc --plugin=protoc-gen-json-ts=./node_modules/protoc-gen-json-ts/bin/protoc-gen-json-ts --json-ts_out=:src/services -I ./apidoc \
		./apidoc/homepage.proto \
		./apidoc/category.proto \
		./apidoc/product.proto  \

.PHONY: genServices