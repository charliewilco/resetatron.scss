var path = require('path');
var resetatronPath = require.resolve('./_resetatron.scss');

var resetatronDir = path.dirname(resetatronPath);

function includePaths() {
  return [resetatronDir];
}

module.exports = {

  includePaths: includePaths(),

  with: function() {
    var paths  = Array.prototype.slice.call(arguments);
    var result = [].concat.apply(includePaths(), paths);
    return result;
  }

};
