const express = require('express')
const path = require('path')

const app = express() // object created

//middleware
//works whenver a webrequest is generateed
//next is a callback funciton to move on to the next funciton
//otherwise will get stuck in the funciton itself
app.use(function(req,res,next){
    console.log('hello')
    next()
})

app.get('/',function (req,res){
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname,'login.html'))
})

//using post to retrieve data
app.post('/login', (req,res) => {
    res.send('Account created')
})

app.get('/about',(req,res) => res.send('about'))

app.listen(3000, function (){
    // can get the full file path with this console.log(__dirname)
    console.log('Server Started')
})