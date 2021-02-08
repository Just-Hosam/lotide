const assert = require('chai').assert;

const head = require('../head.js');

describe('headTest', () => {
  it('should return 1 for [1, 2, 3, 4]', () =>{
    assert.strictEqual(head([1, 2, 3, 4]), 1);
  });

  it('should return "test1" for ["test1", "test2", "test3", "test4"]', () => {
    assert.strictEqual(head(['test1', 'test2', 'test3', 'test4']), 'test1');
  });
});