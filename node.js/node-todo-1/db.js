const homedir = require('os').homedir();
const home = process.env.HOME || homedir
const fs = require('fs')
const p = require('path')
const dbpath = p.join(home, '.todo')
const db = {
  readFile(path = dbpath) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, {
        flag: 'a+'
      }, function (err, data) {
        if (err) return reject(err)
        let list
        try {
          list = JSON.parse(data.toString())
        } catch (err2) {
          list = []
        }
        resolve(list)
      })
    })
  },
  writerFile(list) {
    return new Promise((resolve, reject) => {
      const string = JSON.stringify(list)
      fs.writeFile(dbpath, string, (err3) => {
        if (err3) return reject(err3)
        resolve()
      })
    })
  }
}
module.exports = db