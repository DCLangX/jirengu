import * as http from 'http'
import * as fs from 'fs'
import * as p from 'path'
import * as url from 'url'
import { IncomingMessage, ServerResponse } from 'http'
const server = http.createServer()
const publicDir = p.resolve(__dirname, 'public')
server.on('request', (request: IncomingMessage, response: ServerResponse) => {
  console.log('有人请求了')
  const { method, url: path, headers } = request
  // switch(url){
  //   case '/index.html':
  console.log(url.parse(path))
  const urlObj = url.parse(path)
  fs.readFile(p.resolve(publicDir, urlObj.pathname.slice(1)), (err, buffer) => {
    if (err) throw err
    response.end(buffer.toString())
    console.log('publicDir', buffer.toString())
  })
  // }
})

server.listen(8888)
