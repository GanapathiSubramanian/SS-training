class Animal {
    name = 'animal';
    // constructor(name) {
    //   this.speed = 0;
    //   this.name = name;
    //   console.log(this.name);
    // }
    constructor(){
        console.log(this.name);
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  
  }
  
  class Rabbit extends Animal {
    name = 'rabbit';
    hide() {
      console.log(`${this.name} hides!`);
    }
  
    stop() {
      super.stop(); // call parent stop
      this.hide(); // and then hide
    }
  }
  
//   let rabbit = new Rabbit("White Rabbit");
  new Animal();
//   rabbit.run(5); // White Rabbit runs with speed 5.
//   rabbit.stop();