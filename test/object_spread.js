var test = require('tap').test;

var fs = require('fs');
var check = require('../');

var file = __dirname + '/sources/object_spread.js';
var src = fs.readFileSync(file);

test('ok: object spread', function (t) {
    var err = check(src, file, { plugins: [ 'objectRestSpread' ]});
    t.notOk(err);
    t.end();
});

test('fail: object spread', function (t) {
    var err = check(src, file);
    t.ok(err);
    t.equal(err.line, 1);
    t.equal(err.column, 14);
    t.equal(err.message, 'Unexpected token');
    t.ok(String(err).indexOf(file + ':1') > 0);
    t.end();
});
