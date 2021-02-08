const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe ('Tests for countLetters.js', () => {
  it('should return  when given "lighthouse in the house"', () => {
    const actual = countLetters("lighthouse in the house");
    const expected = {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1
    }

    assert.deepEqual(actual, expected);
  });
});