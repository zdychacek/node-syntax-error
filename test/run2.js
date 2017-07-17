var test = require('tap').test;
var check = require('../');

var fs = require('fs');
var file = __dirname + '/sources/run2.js';
var src = fs.readFileSync(file);

test('throw parse error', function (t) {
    var err = check(src, file);
    t.ok(err);
    t.equal(err.line, 1);
    t.equal(err.column, 1);
    t.equal(err.message, 'Unexpected token');
    t.ok(String(err).indexOf(file + ':1') > 0);
    t.end();
});
