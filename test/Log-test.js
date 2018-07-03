const { assert } = require('chai');
const Log = require('../lib/Log.js');

describe('Log', function () {
  var log;

  beforeEach('initialize log', function() {
    log = new Log(null, 625, 250, 80, 30, -1, 1);
  });

  it('should have properties', function () {
    const expectedObj = {
      image: null,
      x: 625,
      y: 250,
      width: 80,
      height: 30,
      dx: -1,
      dxv: 1
    };

    assert.deepEqual(log, expectedObj);
  });

});
