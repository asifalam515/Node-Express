const fs = require('node:fs')
// reading a file text
const readText= fs.readFileSync("/texts./read.txt","utf-8")
// console.log(readText)
// writting a text
const writtenText = fs.writeFileSync('./texts/write.txt',readText+"this is my written text")
console.log(writtenText)


// reading text asynchronously
fs.readFile("./texts/read.txt",'utf-8',(err,data)=>{
    if(err){
        throw Error("Error reading Text")
    }
    console.log(data)
    // writing text asynchronously
    fs.writeFile('./texts/read2.txt',data,'utf-8',(err)=>{
        if(err){
            throw Error('Error Writting data')
        }
    })

})