const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'static', req.url === '/' ? 'index.html' : req.url)
    const notFoundPagePath = path.join(__dirname, 'static', 'not_found_page.html')
    console.log(filePath)
    fs.access(filePath, fs.constants.F_OK, err => {
        if(err) {
            res.statusCode = 404
            const fStream = fs.createReadStream(notFoundPagePath)
            fStream.pipe(res)
            fStream.on('end', () => res.end)
        } else {
            const fStream = fs.createReadStream(filePath)
            fStream.pipe(res)
            fStream.on('end', () => res.end)
        }
    })
})

const port = process.env.PORT || 80
server.listen(port, () =>
    console.log(`Serving static files on port ${port}`)
)