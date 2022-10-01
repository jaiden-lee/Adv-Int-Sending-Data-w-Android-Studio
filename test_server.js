const http = require("http") // importing the http library in the http variable
const fs = require("fs") // file handling
const port = 3000

const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    fs.readFile("index.html", function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
}) // every time someone requests osmethign on our server, it calls this function right here

server.listen(port, function(error) {
    if (error) {
        console.log("Something went wrong: ", error)
    } else {
        console.log("Server is listening on port: " + port)
    }
}) // this has the server start listening for requests - basically just turning the server on
