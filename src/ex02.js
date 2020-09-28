import fs from 'fs'

console.log('START OF PROGRAM')

fs.copyFile('./../file1.txt', './../file22.txt', (err) => {
    if (err) throw err
})
