let user = { name: "John" };

let admin = user; // copy the reference

console.log(admin.name)
admin.name = 'jack';
console.log(admin.name)
console.log(user.name)