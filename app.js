// import
const express = require('express')      // framework
const mongoose = require('mongoose')    // database
require('dotenv/config')                // credentials

const app = express()                   // create app
app.listen(3000)

// import routes
const postRoute = require('./routes/posts')

// middlewares                          // execute when a route is hit
app.use(express.urlencoded({extended:true})) // for any route process
app.use(express.json())                      // incoming req as json
app.use('/posts', postRoute);


// routes
/*  get    = send msg
    post   = give msg
    delete = rm post
    patch  = update     */
app.get('/', (req, res) => { 
        res.send('We are home!')
    })

mongoose.connect(                       // conect to db
    process.env.MONGO_KEY,
    { useNewUrlParser: true, useUnifiedTopology: true },
    ()=>{console.log('Connected to MongoDB!')
})





/*
APP
//const sayName = require('./sayName')          // exporting single obj
//sayName();

//const getUserInfo = require('./sayName')      // exporting multiple obj
//getUserInfo.sayName();
//getUserInfo.sayAddress();

// npm run dev = node app.js
const http = require('http')
const fs = require('fs')                        // file system
const port = 3000

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile('index.html', function(e, data) {
        if(e) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        }
        else {
            res.write(data) // all data from index.html
        }
        res.end()
    })
})


server.listen(port, function(e) {
    if(e) {
        console.log('Something went wrong', e)
    }
    else {
        console.log('Server is listening on port ' + e)
    }
})
*/

/*
HTTP

const http = require('http')
const path = require('path')
const fs = require('fs')

// res: what we give to the user    req: what we get from the user
const server = http.createServer((req,res)=>{ // listening for an event
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (e, data)=>{
            if(e) {
                res.writeHead(404)
                res.write('File not found')
            }
            else {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write(data)
            }
            res.end()
        })
    }
    if(req.url === '/user') {
        res.write('Welcome user!')
        res.end()
    }                           
})

server.listen(3000, ()=>console.log('Server is up and running'))
*/





/*
FILE SYSTEM

const fs = require('fs')

fs.writeFile('message.txt', 'Hello there node', (error)=>{  // async function
    if(error) throw error;

    console.log('File has been written')
})

// console.log('hello') // this code will run even if prv func isn't finished executing

fs.readFile('./message.txt', 'utf8', (e, data)=>{
    if(e) throw e
    console.log(data)
})
*/


/*
SAY_NAME.JS

const sayName = () => {
    console.log('Hello John')
}

const sayAddress = () => {
    console.log('Johnson Street')
}

//module.exports = sayName

module.exports.sayName = sayName
module.exports.sayAddress = sayAddress
*/