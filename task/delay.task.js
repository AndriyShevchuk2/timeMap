var delalMs = 1000;

module.exports = delayTask;

//  Delay task need to wait some time until files will be created
function delayTask (cb) {
  setTimeout(function () {
    return cb();
  }, delalMs);
}
