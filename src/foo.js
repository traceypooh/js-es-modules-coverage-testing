import { bar } from './bar.js'

const foo = (num) => {
  return num + 1
}

const foobar = (num) => {
  return foo(bar(num))
}

export { foo, foobar }
