const { assert } = require('chai');
const Log = require('../lib/Log.js');

describe('Log', function () {
  var log;

  beforeEach('initialize log', function() {
    log = new Log(625, 250, 80, 30, '#d2691e', -1, 1);
  });

  it('should generate new logs', function() {
    var logs = log.generateLogs();
    assert.equal(logs.length, 4);
  });
});
