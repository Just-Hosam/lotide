const assert = require('chai').assert;

const eqArrays = require('../eqArrays-Recursive');

describe('Tests for eqArrays-recursion.js', () => {
  it('should return true for [[2, 3], [4]] & [[2, 3], [4]]', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it('should return false for [[2, 3], [4]] & [[2, 3], [4]]', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it('should return false for [[2, 3], [4]] & [[2, 3], [4]]', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});