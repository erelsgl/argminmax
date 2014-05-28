argminmax.js
============

Often you have an array and you want to find, not the maximum or minimum element but its index (so that you can remove it later, use it in another array, etc.).

This tiny module supplies two functions that do just this.

The functions are added to the "underscore.js" package.

== EXAMPLE ==

var _ = require("underscore");
_.mixin(require("argminmax"));  

var array = ["b","aa","ddd","cccc"];

console.log(_.argmin(array)) // 1 
console.log(_.argmin(array, function(x){return x.length})) // 0
