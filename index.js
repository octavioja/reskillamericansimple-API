const http = require('http');

const server = http.createServer((req, res) => {
    const endpoint = req.url;
    if (endpoint === '/home') {
        res.end('Welcome to the Home Page');
    } else if (endpoint === '/About') {
        res.end('Welcome to the About Page');
    } else if (endpoint === '/Contact') {
        res.end('Welcome to the Contact Page');
    } else {
        // 404 page not found
        res.end('Page Not Found');
    }
    });



    const port = 3000;
    server.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });