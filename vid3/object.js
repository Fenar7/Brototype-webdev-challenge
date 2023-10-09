var Person = {name:"Fenar",age:25,place:"Calicut", display: function () {
    console.log(this.name)
}} // are key value pairs

for(x in Person){
    console.log(x) //here the x corresponds to the key
    console.log(Person[x])
}

Person.dob="20-2-2000"
Person.displayAge=function(){
    console.log(this.age)
}

Person.name = "Fenar Khan"

console.log(Person.name)
console.log(Person['age'])
console.log(Person.display())
console.log(Person)
console.log(Person.displayAge())