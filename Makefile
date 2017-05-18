install:
	npm install

start:
	npm run babel-node -- src/bin/even.js
	npm run babel-node -- src/bin/calc.js
	npm run babel-node -- src/bin/gcd.js
	npm run babel-node -- src/bin/balance.js

publish:
	npm publish

lint:
	npm run eslint
