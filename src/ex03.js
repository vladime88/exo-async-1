import fs from 'fs/promises'
console.log('START OF PROGRAM')
const copyFile1 = async () => {
    let content1 = await fs.copyFile('./../file1.txt', './../file3.txt')
    return content1
}

let content1 = await copyFile1()

console.log('END OF PROGRAM')
