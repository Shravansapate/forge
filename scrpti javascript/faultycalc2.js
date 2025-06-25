let random =Math.random();
let a =prompt("Enter a number first number");
let b =prompt("Enter a number second number");
let operation =prompt("Enter operationn (+,-,*,/)");    
let obj ={
    '+': '-',
    '*': '+',
    '-': '/',
    '/':'**'
}
if (random>0.1)
{
alert(`The result is ${eval(`${a} ${operation} ${b}`)}`);}
else
{
    operation = obj[operation];

alert(`The result is ${eval(`${a} ${operation} ${b}`)}`);}
