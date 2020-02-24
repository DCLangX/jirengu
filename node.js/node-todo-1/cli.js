const program = require('commander');
const api = require('./index.js')
program
  .option('-p, --pizza-type <type>', 'flavour of pizza');
program
  .command('add <name>')
  .description('添加一个任务')
  .action((name) => {
    // const words = args.slice(0, -1).join(' ')
    // console.log('打游',name)
    api.add(name)
  });
program
  .command('clear')
  .description('清空任务')
  .action(() => {
    api.clear()
  });
program.parse(process.argv);
if (process.argv.length === 2) {
  api.showAll()
}