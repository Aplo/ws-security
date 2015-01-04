/*global describe, it */
'use strict';
var assert = require('assert');
var WSSecurity = require('../');

// We need a lot more tests here
describe('ws-security node module', function () {
    it('must receive the username and the password', function () {
        var x = new WSSecurity('username', 'password');
        assert.equal('username', x._username, 'Username is equal.');
    });
});