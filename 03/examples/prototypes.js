function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype = {
  speak: function () {
    console.log('Hi, my name is ' + this.name);
  }
};

var greg = new Person('greg', 36, 'm');
var hallie = new Person('hallie', 3, 'f');

greg.speak();
hallie.speak();

var thing = {};
console.log(thing);
console.log(greg);

function Computer(type, memory, hd) {
  this.type = type;
  this.memory = memory;
  this.hd = hd;
}

Computer.prototype = {
  bootup: function () {
    console.log('Starting up your ' + this.type);
  },
  checkMemory: function () {
    if (this.memory < 8) {
      this.upgradeMemory(10);
    }

    console.log('TOTAL MEMORY: ', this.memory);
  },
  upgradeMemory: function (gb) {
    this.memory += gb;
  }
};

var mac = new Computer('mac', 7, '1tb');
mac.bootup();
mac.checkMemory();







