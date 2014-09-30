exports.returns2 = function(cb) {
  if(!cb) {
    return 2;
  }

  process.nextTick(function() {
    cb(2);
  })
};

