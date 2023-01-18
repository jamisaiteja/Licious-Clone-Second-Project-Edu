let http = require('http');


//req = What we send to server(params,queryparams,body,headers)
//res - What server will respond 
// "write" is method through which server will respond you back

let server = http.createServer(function(req, res) {
    res.write('<h1>Hi from JSON server!</h1>');
    res.end()
})

server.listen(6780)


//problem with creating server using http server - is that we don't have option to define the routes so that's why EXPRESS JS came into picture
