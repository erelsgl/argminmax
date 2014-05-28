var should = require('should');
var _ = require("underscore");
require("./index");

var array = ["b","aa","ddd","cccc"];

_.argmin(array).should.equal(1);
_.argmax(array).should.equal(2);

_.argmin(array, function(x){return x.length}).should.equal(0);
_.argmax(array, function(x){return x.length}).should.equal(3);
