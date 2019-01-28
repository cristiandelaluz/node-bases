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

let getEmploye = (id, callback) => {
  let employeDB = employes.find(employe => employe.id === id);

  if (!employeDB) {
    callback(`No existe el empleado con id ${ id }`);
  } else {
    callback(null, employeDB);
  }
};

let getSalary = (employe, callback) => {
  let salaryDB = salaries.find(salary => salary.id === employe.id);

  if (!salaryDB) {
    callback(`No se encontró un salario para el empleado ${ employe.name }`);
  } else {
    callback(null, {
      name: employe.name,
      salary: salaryDB.money
    });
  }
};

getEmploye(3, (err, employe) => {
  if (err) {
    return console.log(err);
  }

  getSalary(employe, (err, salary) => {
    if (err) {
      return console.log(err);
    }
  
    console.log(salary);
  });
});