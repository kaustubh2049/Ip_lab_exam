const http = require('http');
const PORT= 3000;
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});

    if(req.url==='/'){
        res.write('<h1> This is the Default page In nodejs SERVER here')
    }else if (req.url==='/home'){
        res.write('<h1>Welcome to Home page</h1>')
    }else if (req.url ==='/about'){
        res.write('<h1> Welcome to the about page</h1>')
        
    }else if(req.url==='/help'){
        res.write('<h1> This is the Help page</h1>')
    }
    res.end();
})
server.listen(PORT,()=>{
    console.log(`Server running on the http://localhost:${PORT}`)
})