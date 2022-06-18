const http = require('http');
const route = require('./route')

const server = http.createServer(route.handleRequest)

server.listen(4000,'localhost',)
