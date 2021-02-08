const assert = require('chai').assert;
const without = require('../without');

describe('Tests for without.js', () => {
  it('it should return [1, 3, 5] when given [1, 2, 3, 4, 5] & [2, 4]', () => {
    const data = [1, 2, 3, 4, 5];
    const except = [2, 4];
    const expected = [1, 3, 5];

    assert.deepEqual(without(data, except), expected);
  });
});