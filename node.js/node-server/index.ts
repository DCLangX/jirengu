import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';
const server = http.createServer()
server.on('request', (request: IncomingMessage, response: ServerResponse) => {
  console.log('有人请求了')
  console.log(request.url)
  console.log('有人请求了')
  response.end('hi')
})

server.listen(8888)