import sinon from 'sinon'

import Goo from '../src/goo.js'

describe('goo()', () => {
  it('should switch from 2 to 3 via a swap out', () => {
    expect(Goo.fun1()).toBe(2)

    // Now we can swap/mock to a different expectation.  This time, by hand.
    const orig = Goo.fun2
    Goo.fun2 = () => 3
    expect(Goo.fun1()).toBe(3)
    Goo.fun2 = orig

    expect(Goo.fun1()).toBe(2)
  })


  it('should switch from 2 to 3 via a mock', () => {
    expect(Goo.fun1()).toBe(2)

    // Now we can swap/mock to a different expectation.  This time w/ mocking library.
    sinon.stub(Goo, 'fun2').callsFake(() => 3)
    expect(Goo.fun1()).toBe(3)
    Goo.fun2.restore()

    expect(Goo.fun1()).toBe(2)
  })
})
