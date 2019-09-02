const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url

    switch (url) {
        case '/':
            res.end('<h1>Home Page</h1>')
            break;
        
        case '/about':
            res.end('<h1>About Page</h1>')
            break;

        default:
            res.end('<h1>Page Not Found</h1>')
            Break;
    }
 
})

const port = process.env.PORT || 3000
server.listen(port)