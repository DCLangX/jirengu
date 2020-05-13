import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';
const server = http.createServer()
server.on('request', (request: IncomingMessage, response: ServerResponse) => {
  console.log('有人请求了')
  console.log(request.url)
  console.log('有人请求了')
  const array = [];
  request.on('data', (chunk) => {
    array.push(chunk)
  })
  request.on('end', () => {
    const body = Buffer.concat(array).toString();
    console.log('body')
    console.log(body)
    response.end('hi')
  })
})

server.listen(8888)