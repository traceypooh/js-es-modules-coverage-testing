import { foo, foobar } from '../src/foo.js'

describe('foo', function () {
  describe('foo()', function () {
    it('should return number plus one', function () {
      expect(foo(1)).toEqual(2)
    })
  })

  describe('foobar()', function () {
    it('should return same number', function () {
      expect(foobar(1)).toEqual(1)
    })
  })
})
