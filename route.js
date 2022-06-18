const url = require('url')
const fs = require('fs')

const renderPage = (path, res) => {
  fs.readFile(path,null, (err, data) => {
    if (!err) {
      res.write(data)
    } else {
      res.writeHead(404)
      res.end(`
    <html>
      <body style="background:black; text-align:center; color:white;">
        <h1>Page Not Found</h1>
        <p>404</p>
      </body>
    </html>
    `)
    }
    res.end()
  })
  
}
module.exports = {
  handleRequest: (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })

    const path = url.parse(req.url).pathname;

    switch (path) {
      case '/':
        renderPage('./pages/index.html', res)
        break
      case '/home':
        renderPage('./pages/index.html', res)
        break
      case '/contact':
        renderPage('./pages/contact.html', res)
        break
      case '/about':
        renderPage('./pages/about.html', res)
        break
      default:
        res.writeHead(404)
        res.end(`
          <html>
            <body style="background:black; text-align:center; color:white;">
              <h1>Page Not Found</h1>
              <p>404</p>
            </body>
          </html>
        `)
    }
  }
}