/json object/
var operations={};
var employees=[]

operations.employees=employees;
console.log(operations);

var firstName="abc";
var lastName="xyz";
var id=1;

var employee={
  firstName:"abc",
  lastName:"xyz",
  id:1
}
opeations.employees.push(employee);
console.log(operations);

var sum="abc";
operations.employees[0].sum=sum;
console.log(operations);

console.log(JSON.stringify(operations));