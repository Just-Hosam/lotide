const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('Tests for takeUntil.js', () => {
  it('should return [ 1, 2, 5, 7, 2 ] when given [1, 2, 5, 7, 2, -1, 2, 4, 5] & x => x < 0', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const expected = [ 1, 2, 5, 7, 2 ];

    assert.deepEqual(takeUntil(data1, x => x < 0), expected);
  });

  it('should return [ "I\'ve", "been", "to", "Hollywood" ] when given ["I\'ve", "been", "to", "Hollywood", ",", "I\'ve", "been", "to", "Redwood"] & x => x === ","', () => {
    const data1 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const expected = [ "I've", 'been', 'to', 'Hollywood' ];

    assert.deepEqual(takeUntil(data1, x => x === ','), expected);
  });
});