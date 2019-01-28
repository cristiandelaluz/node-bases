let getUserById = (id, callback) => {
  let user = {
    name: 'Cristian',
    id
  };

  if (id === 20) {
    callback(`El usuario con id 20 no existe`);
  } else {
    callback(null, user);
  }
};

getUserById(10, (err, user) => {
  if (err) {
    return console.log(err);
  }

  console.log('Usuario de bd', user);
});