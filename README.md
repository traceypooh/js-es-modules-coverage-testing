# JS coverage and testing for ES6 code using ES Modules
## Uses simply: jasmine, nyc and esm
Goal is to avoid babel, transpiling, and any dynamic transform of the JS source/test code as possible.
- `mocha` since it can understand ES Modules (and make `import`/`export` work nicely).
- `c8` for code coverage (since it understands ES Modules)
- `expectations` for `jest`/`jasmine` like testing, eg: `expect('hai'.length).toBe(3)`
- `sinon` for mocking, stubs, and spies (more below on that)
There's a few _subtle_ things to get setup and "just right" to make it all work seamlessly.
But once you know them, you're good to go.

**If you prefer `jasmine`**, see this prior setup
https://github.com/traceypooh/js-es-modules-coverage-testing/tree/jasmine-esm-nyc


## run
```bash

git clone https://github.com/traceypooh/js-es-modules-coverage-testing
cd js-es-modules-coverage-testing
npm install
npm test
```
(or alternatively: `npx c8 mocha`)

## yields
```text
> @ test /Users/tracey/dev/js-es-modules-coverage-testing
> c8 mocha

  bar()
    ✓ should return number minus one

  foo()
    ✓ should return number plus one

  foobar()
    ✓ should return same number

  goo()
    ✓ should switch from 2 to 3 via a swap out
    ✓ should switch from 2 to 3 via a mock

  5 passing (11ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 bar.js   |     100 |      100 |     100 |     100 |
 foo.js   |     100 |      100 |     100 |     100 |
 goo.js   |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
```

## the magic
- in `package.json`, this tells `node` and scripts all `.js` files are ES Modules
```json
  "type": "module",
```
- in `package.json`, this tells `mocha` to preload `expectations` (for `jest`-like testing)
```json
  "mocha": {
    "require": "expectations"
  }
```


## mocking, stubs, and spies
_By Far,_ this is the most complicated thing to get right.  I spent hours and hours over a few days on/off trying to get mocking to work (first with `jasmine`, then `sinon`).

Fortunately, I found this lil' gem:
- https://stackoverflow.com/a/46739544

Normally, ES Modules are _very locked down_ and hard to mock.  By grouping all the export-ed methods via `export default Goo`, and importing via `import Goo from '../src/goo.js'`, we can replace methods if needed for testing.  (Imagine needing to test something that live-fetches resources, etc.)
