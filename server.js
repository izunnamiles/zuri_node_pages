const http = require('http');
const route = require('./route')

const server = http.createServer(route.handleRequest)

const port = process.env.PORT || 4000

server.listen(port, 'localhost', () => {
  console.log(`node serving on ${port}`)
})

