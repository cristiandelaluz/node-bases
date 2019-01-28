// let getName = async () => {
// Disparar un error
//   throw new Error('No existe un nombre para ese usuario');

//   return 'Cristian';
// };

let getName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Cristian');
    }, 3000);
  });
}

let greet = async () => {
  let name = await getName();
  return `Hola ${ name }`;
}

greet()
  .then(message => console.log(message))
  .catch(err => console.log(`ASYNC ${ err }`));