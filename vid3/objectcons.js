function Person(name,age,place){
    this.name = name
    this.age = age
    this.place = place
    this.display = function (){
        console.log("Name : "+this.name+" Age : "+this.age+" Place : "+this.place)
    }
}

//createing an object

var Fenar = new Person("Fenar",19,"Kakkodi")
var Neeraj = new Person("Neeraj",20,"Karaparamba")

Fenar.display()
Neeraj.display()

//these 2 objects have seperate memeory spaces