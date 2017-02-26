var path = require('path');
var _root = path.resolve(__dirname, '..');

function rootPath(relativePath) {
    return _root + relativePath;
}

exports.rootPath = rootPath;
