
genServices:
	protoc --plugin=protoc-gen-json-ts=./node_modules/protoc-gen-json-ts/bin/protoc-gen-json-ts --json-ts_out=:src/services -I ./contract \
		./contract/homepage.proto \
		./contract/category.proto \
		./contract/product.proto  \

.PHONY: genServices