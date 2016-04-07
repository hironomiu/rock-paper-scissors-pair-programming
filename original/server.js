var http = require("http"),fs = require('fs');

http.createServer(function(request, response) {
    switch (request.url) {
        case '/':
            fs.readFile(__dirname + '/public/index.html', 'UTF-8', function(err, data) {
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(data);
                response.end();
            });
            break;
        case '/bower_components/bootstrap/dist/css/bootstrap.css':
            fs.readFile(__dirname + '/public/bower_components/bootstrap/dist/css/bootstrap.css', 'UTF-8', function(err, data) {
                response.writeHead(200, {"Content-Type": "text/css"});
                response.write(data);
                response.end();
            });
            break;
        case '/css/base.css':
            fs.readFile(__dirname + '/public/css/base.css', 'UTF-8', function(err, data) {
                response.writeHead(200, {"Content-Type": "text/css"});
                response.write(data);
                response.end();
            });
            break;
        case '/bower_components/jquery/dist/jquery.js':
            fs.readFile(__dirname + '/public/bower_components/jquery/dist/jquery.js', 'UTF-8', function(err, data) {
                response.writeHead(200, {"Content-Type": "application/javascript"});
                response.write(data);
                response.end();
            });
            break;
        case '/bower_components/vue/dist/vue.js':
            fs.readFile(__dirname + '/public/bower_components/vue/dist/vue.js', 'UTF-8', function(err, data) {
                response.writeHead(200, {"Content-Type": "application/javascript"});
                response.write(data);
                response.end();
            });
            break;
        case '/bower_components/bootstrap/dist/js/bootstrap.js':
            fs.readFile(__dirname + '/public//bower_components/bootstrap/dist/js/bootstrap.js', 'UTF-8', function(err, data) {
                response.writeHead(200, {"Content-Type": "application/javascript"});
                response.write(data);
                response.end();
            });
            break;
        case '/js/rock-paper-scissors.js':
            fs.readFile(__dirname + '/public/js/rock-paper-scissors.js', 'UTF-8', function(err, data) {
                response.writeHead(200, {"Content-Type": "application/javascript"});
                response.write(data);
                response.end();
            });
            break;
        case '/img/rock.png':
            var buf = fs.readFileSync(__dirname + '/public/img/rock.png','binary');
            response.writeHead(200,{"Content-Type": "image/png"});
            response.end( buf,'binary');
            break;
        case '/img/paper.png':
            var buf = fs.readFileSync(__dirname + '/public/img/paper.png','binary');
            response.writeHead(200,{"Content-Type": "image/png"});
            response.end( buf,'binary');
            break;
        case '/img/scissors.png':
            var buf = fs.readFileSync(__dirname + '/public/img/scissors.png','binary');
            response.writeHead(200,{"Content-Type": "image/png"});
            response.end( buf,'binary');
            break;
        default:
            break;
    }
}).listen(8888);
