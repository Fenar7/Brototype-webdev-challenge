var read = require('readline-sync')

var n1 = read.question("Enter number 1 ")
var n2 = read.question("Enter number 2 ")

if(n1>n2){
    console.log('Larger is '+n1)
}else if(num1===num2){
    console.log('Both numbers are equal')
}
else{
    console.log('Larger is '+n2)
}