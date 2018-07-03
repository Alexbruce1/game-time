const { assert } = require('chai');
const Log = require('../lib/Log.js');

describe('Log', function () {
  var log;

  beforeEach('initialize log', function() {
    log = new Log(null, 625, 250, 80, 30, -1, 1);
  });

  it('should have properties', function () {
    const log = new Log(null, 50, 50, 10, 10, 1);
    const expectedObj = {
      image: null,
      x: 50,
      y: 50,
      height: 10,
      width: 10,
      dx: 1,
      dxv: 0
    }
  });
});
