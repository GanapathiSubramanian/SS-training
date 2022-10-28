var k1 = {a: 1};
var k2 = {b: 2};

var map = new Map();
var wm = new WeakMap();

map.set(k1, 'k1');
wm.set(k2, 'k2');

k1 = null;
map.forEach(function (val, key) {
    console.log(key, val); // k1 {a: 1}
});
console.log(wm.get(k2)); 
k2 = null;
console.log(wm.get(k2)); // undefined