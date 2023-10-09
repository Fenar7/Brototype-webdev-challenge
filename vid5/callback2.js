var hello = function(data){
    console.log("Data : "+data)
}

var hey = function(callback){
    callback('Hello World')
}

hey(hello)

//the function hello is passed as an argument
//to funciton hey then it is used inside funciton
// hey to call hello and also passing argument hello world to the functin hello