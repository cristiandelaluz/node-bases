// function sum(a, b) {
//   return a+ b;
// }

let sum = (a, b) => a + b;
// let greet = () => 'Hola mundo';
let greet = name => `Hola ${ name }`;

// console.log(sum(10, 20));
// console.log(greet('Cristian'));

let deadpool = {
  name: 'Wade',
  lastName: 'Wilson',
  power: 'Regeneración',
  getName() {
    return `${ this.name } ${ this.lastName } - poder ${ this.power }`;
  }
};

// Destructuración
let { name:firstName, lastName, power } = deadpool;

console.log(firstName, lastName, power);
console.log(deadpool.getName());