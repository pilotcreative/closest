build:
	mkdir -p build
	duo index.js --global closest > build/build.js

.PHONY: build