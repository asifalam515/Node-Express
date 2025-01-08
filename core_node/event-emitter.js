const EventEmitter = require('events')
const myEmitter = new EventEmitter()
// first listener
myEmitter.on('birhtday',()=>{
    console.log(`Happy Birthady to you...`)
})
myEmitter.on('birthday',()=>{
    console.log(`i will send a gift `)
})
myEmitter.emit("birthday")
