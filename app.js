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
app.get('/', (req, res) => { 
        res.send('We are home!')
    })

mongoose.connect(                       // conect to db
    process.env.MONGO_KEY,
    { useNewUrlParser: true, useUnifiedTopology: true },
    ()=>{console.log('Connected to MongoDB!')
})
