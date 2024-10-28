// requires the in-built js module
// http module used to create a server
const http = require('http');

// fs module used to access the file which are placed in the same folder
const fs = require('fs');

// create a variable 
const port = 3000;

// create a server using the createServer method 
const server = http.createServer((req, res) => {
    // check the url for send the only specific url
    if (req.url === "/home") {

        // read the index.html file using the fs module and pass the function
        fs.readFile('./main/index.html', (err, data) => {

            // read the style.css file using the fs module and pass the function
            fs.readFile('./public/style.css', (err, cssData) => {

                // convert the index.html data into string
                const html = data.toString();
                // convert the style.css data into string and placed in style tag
                const css = `<style>${cssData.toString()}</style>`;
                // modifiction in html file
                const modifiedHtml = html.replace('</head>', `${css}</head>`);
                // convert the response into text format and add status code
                res.writeHead(200, { 'Content-Type': 'text/html' });
                // send the response to the client
                return res.end(modifiedHtml);
            });
        });
    } else if (req.url === "/about") {
        // read the services.html file using the fs module and pass the function
        fs.readFile('./main/about.html', (err, data) => {

            // read the style.css file using the fs module and pass the function
            fs.readFile('./public/style.css', (err, cssData) => {
                // convert the index.html data into string
                const html = data.toString();
                // convert the style.css data into string and placed in style tag
                const css = `<style>${cssData.toString()}</style>`;
                // modifiction in html file
                const modifiedHtml = html.replace('</head>', `${css}</head>`);
                // convert the response into text format and add status code
                res.writeHead(200, { 'Content-Type': 'text/html' });
                // send the response to the client
                return res.end(modifiedHtml);
            });
        });
    } else if (req.url === "/services") {

        // read the services.html file using the fs module and pass the function
        fs.readFile('./main/services.html', (err, data) => {

            // read the style.css file using the fs module and pass the function
            fs.readFile('./public/style.css', (err, cssData) => {
                // convert the index.html data into string
                const html = data.toString();
                // convert the style.css data into string and placed in style tag
                const css = `<style>${cssData.toString()}</style>`;
                // modifiction in html file
                const modifiedHtml = html.replace('</head>', `${css}</head>`);
                // convert the response into text format and add status code
                res.writeHead(200, { 'Content-Type': 'text/html' });
                // send the response to the client
                return res.end(modifiedHtml);
            });
        });
    } else {
        // read the error.html file using the fs module and pass the function
        fs.readFile('./main/error.html', (err, data) => {

            // read the style.css file using the fs module and pass the function
            fs.readFile('./public/style.css', (err, cssData) => {

                // convert the index.html data into string
                const html = data.toString();
                // convert the style.css data into string and placed in style tag
                const css = `<style>${cssData.toString()}</style>`;
                // modifiction in html file
                const modifiedHtml = html.replace('</head>', `${css}</head>`);
                // convert the response into text format and add status code
                res.writeHead(200, { 'Content-Type': 'text/html' });
                // send the response to the client
                return res.end(modifiedHtml);
            });
        });
    }
});

server.listen(port, "localhost", () => {
    console.log(`Listening to the port on http://localhost:${port}/home`);
});