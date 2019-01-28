let employes = [
  {
    id: 1,
    name: 'Cristian'
  },
  {
    id: 2,
    name: 'Diana'
  },
  {
    id: 3,
    name: 'Uriel'
  }
];

let salaries = [
  {
    id: 1,
    money: 1000
  },
  {
    id: 2,
    money: 2000
  }
];

let getEmploye = id => {
  return new Promise((resolve, reject) => {
    let employeDB = employes.find(employe => employe.id === id);

    if (!employeDB) {
      reject(`No existe el empleado con id ${ id }`);
    } else {
      resolve(employeDB);
    }
  });
};

let getSalary = employe => {
  return new Promise((resolve, reject) => {
    let salaryDB = salaries.find(salary => salary.id === employe.id);

    if (!salaryDB) {
      reject(`No se encontró un salario para el empleado ${ employe.name }`);
    } else {
      resolve({
        name: employe.name,
        salary: salaryDB.money
      });
    }
  });
};

// getEmploye(3).then(employe => {
//   getSalary(employe).then(response => {
//     console.log(`El salario de ${ response.salary } es de ${ response.name }`);
//   }, err  => console.log(err));
// }, err => console.log(err));

getEmploye(2).then(employe => {
  return getSalary(employe);
})
.then(response => {
  console.log(`El salario de ${ response.salary } es de ${ response.name }`);
})
.catch(err => {
  console.log(err);
});
