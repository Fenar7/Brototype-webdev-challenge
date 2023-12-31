// var http = require('http')

// http.createServer(server).listen(7000)

// function server(req,res){
//     res.write('Hello World')
//     res.end()
// }

var http = require('http')
var fs = require('fs')

http.createServer(function (req,res){

    if(req.url==="/"){
        fs.readFile('hello.html',function(err,data){ // this functin is called when the html files has completed reading
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(req.url==="/signup"){
        fs.readFile('signup.html', (err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end
        })
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.end()
    }
}).listen(7000,function(){
    console.log('Server Started')
})
