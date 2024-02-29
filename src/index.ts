export {};

// EXAMPLE 1 - Class implementing Interfaces in TypeScript

interface Employee {
  id: number;
  name: string;
  tasks: string[];

  doWork(): void;
}

class Developer implements Employee {
  constructor(
    public id: number,
    public name: string,
    public tasks: string[],
  ) {
    this.id = id;
    this.name = name;
    this.tasks = tasks;
  }

  doWork() {
    console.log(`${this.name} writes code`);
  }
}

const dev = new Developer(1, 'Bobby Hadz', ['develop', 'test', 'ship']);

console.log(dev.name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 2 - Using class properties instead of parameters

// interface Employee {
//   id: number;
//   name: string;
//   tasks: string[];

//   address: {
//     country: string;
//     city: string;
//   };

//   doWork(): void;
// }

// class Developer implements Employee {
//   tasks: string[] = ['develop', 'test'];

//   address: { country: string; city: string } = {
//     country: 'Austria',
//     city: 'Linz',
//   };

//   constructor(
//     public id: number,
//     public name: string,
//   ) {
//     this.id = id;
//     this.name = name;
//   }

//   doWork() {
//     console.log(`${this.name} writes code`);
//   }
// }

// const dev = new Developer(1, 'Bobby Hadz');

// console.log(dev.name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 3 - Class implementing multiple interfaces in TypeScript

// interface Employee {
//   id: number;
//   salary: number;
// }

// interface Person {
//   name: string;
// }

// class Developer implements Employee, Person {
//   constructor(
//     public id: number,
//     public name: string,
//     public salary: number,
//   ) {
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
//   }
// }

// const dev = new Developer(1, 'Bobby Hadz', 100);

// console.log(dev.name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 4 - Make sure to set all of the required properties and methods

// interface Employee {
//   id: number;
//   salary?: number; // 👈️ optional property (can be undefined)
// }

// class Developer implements Employee {
//   constructor(public id: number) {
//     this.id = id;
//   }
// }
