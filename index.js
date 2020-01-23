const server = require('./server.js')
const port = 7000

server.listen(7000, ()=>{
    console.log(`listening on ${port}`)
}) 