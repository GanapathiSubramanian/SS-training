const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
var fullNameAfterApply = person.fullName.apply(person1, ["Oslo", "Norway"]);
console.log(fullNameAfterApply);

var fullNameAfterCall = person.fullName.call(person1, "Oslo", "Norway");
console.log(fullNameAfterCall);