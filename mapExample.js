let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key
map.set(2,{"name":"hello in map"})

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(2)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 3


let set = new Set();
set.add(1)
set.add(2)
set.add(1)
console.log(set.values())