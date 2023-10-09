// var dt = new Date // gets the current date

// console.log('hello')
// for(i=0;i<10000;i++){
//     console.log('Loop')
// }
// console.log('end')

// var diff = new Date() - dt

// console.log(diff)

// function longTask(millSecondTime){
//     dt = new Date()
//     while((new Date-dt)<=millSecondTime){

//     }
// }
// console.log('started')
// longTask(2000)
// console.log('Ended')
// writing the above block in asynchronus form

function showEnd(){
    console.log("End")
}

console.log('started')
setTimeout(showEnd,2000)

console.log('started')
setTimeout(showEnd,2000)

console.log('started')
setTimeout(showEnd,2000)

//setTime out is asynchronus