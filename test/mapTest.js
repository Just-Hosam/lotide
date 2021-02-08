const assert = require('chai').assert;
const map = require('../map');

describe('Tests for map.js', () => {
  it('should return [ "g", "c", "t", "m", "t" ] when given words & word => word[0]', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const expected = [ 'g', 'c', 't', 'm', 't' ];

    assert.deepEqual(map(words, word => word[0]), expected);
  });

  it('should return ["groundtest", "controltest", "totest", "majortest", "tomtest"] when given words & word => word + "test"', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const expected = ["groundtest", "controltest", "totest", "majortest", "tomtest"];

    assert.deepEqual(map(words, word => word + 'test'), expected);
  });

  it('should return [6, 7, 2, 5, 3] when given words & word => word.length', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const expected = [6, 7, 2, 5, 3];

    assert.deepEqual(map(words, word => word.length), expected);
  });
});