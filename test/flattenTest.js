const assert = require('chai').assert;
const flatten = require('../flatten');

describe('Tests for flatten.js', () => {
  it('should return ', () => {
    const nestArr = [[1, 2], [3], [4, 5]];

    assert.deepEqual(flatten(nestArr), [1, 2, 3, 4, 5]);
  });
});