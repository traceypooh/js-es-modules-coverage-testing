# js-es-modules-coverage-testing
JS coverage and testing for ES6 code using ES Modules, leveraging simply: jasmine, nyc and esm

# run
```bash

git clone https://github.com/traceypooh/js-es-modules-coverage-testing
cd js-es-modules-coverage-testing
npm install
npm test
```

# yields
```text
> npm test

> @ test /Users/tracey/dev/js-es-modules-coverage-testing
> nyc jasmine

Randomized with seed 31274
Started
...


3 specs, 0 failures
Finished in 0.009 seconds
Randomized with seed 31274 (jasmine --random=true --seed=31274)
--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------|---------|----------|---------|---------|-------------------
All files     |     100 |      100 |     100 |     100 |                   
 spec         |     100 |      100 |     100 |     100 |                   
  bar.spec.js |     100 |      100 |     100 |     100 |                   
  foo.spec.js |     100 |      100 |     100 |     100 |                   
 src          |     100 |      100 |     100 |     100 |                   
  bar.js      |     100 |      100 |     100 |     100 |                   
  foo.js      |     100 |      100 |     100 |     100 |                   
--------------|---------|----------|---------|---------|-------------------
```
