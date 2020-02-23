import EventHub from '../index'
const test1 = (message) => {
  const eventHub = new EventHub()
  console.assert(eventHub instanceof Object === true, 'eventHub是对象')
}
const test2 = (message) => {
  const eventHub = new EventHub()
  let called = false
  eventHub.on('txt', data => {
    called = true
    console.log('被调用', data)
    console.assert(data === 'hhh')
  })
  eventHub.emit('txt', 'hhh')
  setTimeout(() => {
    console.assert(called === true)
  }, 1000)
}
const test3 = (message) => {
  const eventHub = new EventHub()
  let called = false
  let fn2 = () => {
    called = true
  }
  eventHub.on('yyy', fn2)
  eventHub.off('yyy', fn2)
  eventHub.emit('yyy')
  setTimeout(() => {
    console.assert(called === false)
  }, 1000);
}

test1('eventhub可以创建对象')
test2('on了之后，.emit会触发.on的函数')
test3('.off有用')