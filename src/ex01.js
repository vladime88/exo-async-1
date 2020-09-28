import fs from 'fs'

console.log('Start copy')
let content1 = fs.readFileSync('./../file1.txt', 'utf-8')

console.log('file1.txt:', content1)

fs.copyFileSync('./../file1.txt', './../file2.txt')
