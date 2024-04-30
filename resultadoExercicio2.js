/*const{nome, email, dataNascimento} = require('./exercicio2')

console.log(nome)
console.log(email)
console.log(dataNascimento)*/


// CJS
const { faker } = require('@faker-js/faker');

function createRandomUser(){
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    birthdate: faker.date.birthdate(),
  };
}
console.log(createRandomUser());