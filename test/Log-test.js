const { assert } = require('chai');
const Log = require('../lib/Log.js');

describe('Log', function () {
  var log;

  beforeEach('initialize log', function() {
    log = new Log(625, 250, 80, 30, '#d2691e', -1, 1);
  });

  it('should start back at the right side when it reaches the left side', function () {
    assert.equal(log.x, 625);
    log.checkLogBounds();
    assert.equal(log.x, 625);
    log.x = -81;
    log.checkLogBounds(log.x, 600);
  });
});
