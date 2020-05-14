import { bar } from '../src/bar';

describe('bar', function () {
  describe('bar()', function () {
    it('should return number minus one', function () {
      expect(bar(1)).toEqual(0);
    });
  });
});
