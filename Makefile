.PHONY: tests
tests:
	tsc --module commonjs app/*.ts
	./node_modules/jasmine-node/bin/jasmine-node .
