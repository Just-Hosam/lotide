const assert = require('chai').assert;

const middle = require('../middle');

describe('Tests for middle.js', () => {
  it('should return [] when given []', () => {
    assert.deepEqual(middle([]), []);
  });

  it('should return [] when given [1]', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('should return [] when given [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('should return [2] when given [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('should return [2, 3] when given [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('should return [3] when given [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('should return [3, 4] when given [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it('should return [4] when given [1, 2, 3, 4, 5, 6, 7]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
});