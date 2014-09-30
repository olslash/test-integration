var should = require('chai').should();
var thing = require('./thing');

describe('Test module', function() {
  describe('returns2', function() {
    it('should return 2', function() {
      thing.returns2().should.equal(2);      
    });

    it('should test an async thing', function(done) {
      thing.returns2(function(result) {
        result.should.equal(2);
        done();
      });
    });
  });
});



