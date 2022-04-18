const express = require('express')
var querystring = require('querystring');
var http = require('http');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')

    var data = querystring.stringify({
        username: "myname",
        password: " pass"
    });

    var options = {
        host: 'www.javaserver.com',
        port: 8080,
        path: '/login',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(data)
        }
    };

    var req = http.request(options, function(res)
    {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log("body: " + chunk);
        });
    });
    req.write(data);
    req.end();
})



app.listen(port, () => {
  console.log(`listening on port ${port}`)
})