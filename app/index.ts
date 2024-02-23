import fs from 'fs'

(() => {
  console.log('Hello, World !')
  console.log(fs.readFileSync('text.txt'))
})()
