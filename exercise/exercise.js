const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = 'Simon';
// Modify the property `firstName` of the `person2` in "Simon".
//Viene modificato anche person1 perchè fanno riferimento entrambi allo stesso oggetto

console.log(person1);
console.log(person2);
