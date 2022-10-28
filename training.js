const readline = require("readline")
// const input = prompt("What's your name?");

const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
  }
  const Intern = {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
  }

  function sayHi() {
    console.log(`Hello, my name is ${this.name}`)
  }

  function newEmployee(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
  }

  Manager.sayHi = sayHi;
  Intern.sayHi = sayHi;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("What is your name?\n", function (string) {
    fullName = string;
    //Destructuring an array
    let [firstName, surname] = fullName.split(' ');
    console.log("My name before this - " + Manager.name)
    Manager.name  = firstName;
    //this keyword
    console.log("My name after this - ")
    Manager.sayHi();

    //creating a new user using constructor
    let newUser = new newEmployee('ajay',23,'SDE')
    console.log(newUser.age);
    rl.close();

    console.log("after 2 sec...");
    setTimeout(()=>{
      console.log("printing...");
    },2000)
    setInterval(()=>{
      rl.question("mark your attendance",(string)=>{
        
      })
    },3000)
  });