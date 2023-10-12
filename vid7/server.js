var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function (req,res){

    var q = url.parse(req.url,true) // if we set to true we get the vbalues as onjects from passicng the html page
    console.log(q.pathname)

    if(q.pathname==='/'){
        fs.readFile('sample.html',function (err,hai){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(hai)
            res.end()
        })
    }
    else if(q.pathname==='/login'){
        fs.readFile('login.html',function (err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(q.pathname==='/loginaction'){
        //to get the data
        res.writeHead(200,{'Content-Type':'text/html'})
        console.log(q.query)
        console.log(q.query.lname)
        res.write('<h1>'+"HI "+q.query.fname+'</h1>')
        res.end()
    }
    else{
        res.writeHead(404,{'Content-Type' : 'text/html'})
        res.write('error')
        res.end()
    }
}).listen(7000,function (){
    console.log('Server Started')
})