const db = require('./db')
const inquirer = require('inquirer');
module.exports.add = async (title) => {
  let list = await db.readFile()
  const task = {
    title: title,
    done: false
  }
  list.push(task)
  await db.writerFile(list)
}
module.exports.clear = async () => {
  await db.writerFile([])
}
module.exports.showAll = async () => {
  const list = await db.readFile()
  // list.forEach((task, index) => {
  //   console.log(`${task.done?'[x]':'[_]'} ${index+1} - ${task.title}`)
  // })
  inquirer
    .prompt({
      type: 'list',
      name: 'index',
      message: '请选择你想操作的任务',
      choices: [{
        name: '退出',
        value: '-1'
      }, ...list.map((task, index) => {
        return {
          name: `${task.done?'[x]':'[_]'} ${index+1} - ${task.title}`,
          value: index.toString()
        }
      }), {
        name: '创建任务',
        value: '-2'
      }]
    })
    .then(answers => {
      console.log(answers.index);
    });
}