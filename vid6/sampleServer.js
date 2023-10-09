// var http = require('http')

// http.createServer(server).listen(7000)

// function server(req,res){
//     res.write('Hello World')
//     res.end()
// }

var http = require('http')
var fs = require('fs')

http.createServer(function (req,res){
    fs.readFile('hello.html',function(err,data){ // this functin is called when the html files has completed reading
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
}).listen(7000)
