var r = require('readline-sync')

function add(n1,n2){
    n1 = Number(n1)
    n2 = Number(n2)
    return n1+n2
}

var n1 = r.question("Enter nubmer 1")
var n2 = r.question("Enter number 2")

var s = ["Abhi","Fenar","Neeraj","Salih"]


console.log(s[0])
console.log("Sum = "+(add(n1,n2)))