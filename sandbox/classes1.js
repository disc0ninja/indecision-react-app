// ES6 Classes Practice Sandbox

// Person
class Person {
  constructor(name = 'Anon', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    //return 'Hi! I am ' + this.name + '!';
    return `Hi! I am ${this.name}!`
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

// Student
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Thier major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasLocation()) {
      greeting += ` I'm from ${this.homeLocation}`
    }
    return greeting
  }
}

const me = new Traveler('Tim Pankan', 28, 'Minnesota');

const court = new Person('Courtney Pankan');

const other = new Traveler();

console.log(me);
console.log(me.getGreeting());
console.log(court.getGreeting());
console.log(other);
console.log(other.getGreeting());