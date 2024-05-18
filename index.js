// const fs = require('fs')

// fs.readFile('../js/script.js' , 'utf-8', (err, data)=>{
//     fs.writeFile('some.txt' , data , (err, data)=>{
//         console.log('all is  ok');
//     })
// })


// fs.unlink('./some.txt', () => {})


// fs.unlink('./text-files/some.txt', ()=>{
//     fs.rmdir('./text-files', ()=>{})
// })


// const http = require('http')

// let server = http.createServer((req, res)=>{
//    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
//    res.end('hello node js')
// })

// const PORT = 3000
// const HOST = 'localhost'

// server.listen(PORT, HOST, ()=>{
//    console.log( `server is run on :  http://${HOST}:${PORT}`)
// })

const http = require('http')
const fs = require('fs')


let server = http.createServer((req, res)=>{
   res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
   // res.end('hello node js')
   // const stream = fs.createReadStream('./templates/index.html')
   // stream.pipe(res)
   if(req.url == '/')
       fs.createReadStream('./templates/index.html').pipe(res)
   else if(req.url == '/about')  
       fs.createReadStream('./templates/about.html').pipe(res) 
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, ()=>{
   console.log( `server is run on :  http://${HOST}:${PORT}`)
})
