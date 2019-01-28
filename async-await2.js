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

let getEmploye = async id => {
  let employeDB = employes.find(employe => employe.id === id);

  if (!employeDB) {
    throw new Error(`No existe el empleado con id ${ id }`);
  } else {
    return employeDB;
  }
};

let getSalary = async employe => {
  let salaryDB = salaries.find(salary => salary.id === employe.id);

  if (!salaryDB) {
    throw new Error(`No se encontró un salario para el empleado ${ employe.name }`);
  } else {
    return {
      name: employe.name,
      salary: salaryDB.money
    };
  }
};

let getInfo = async (id) => {
  let employe = await getEmploye(id);
  let info = await getSalary(employe);

  return `El salario de ${ info.salary } es de ${ info.name }`;
};

getInfo(2)
  .then(message => console.log(message))
  .catch(err => console.log(err));