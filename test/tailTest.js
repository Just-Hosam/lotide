const assert = require('chai').assert;

const tail = require('../tail.js');

describe('Tests for tail.js', () => {
  it('should return [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});