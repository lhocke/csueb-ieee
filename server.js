const express = require('express');
const helmet = require ('helmet')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000;

app.use(helmet())

app.use(express.static(path.resolve(__dirname,'public')))
app.use(express.static(path.resolve(__dirname,'views')))

var indexRouter = require('./routes/index')

app.use('/', indexRouter)

app.listen(PORT, () => {                // ExpressJS server start
    console.log(`Listening on ${PORT}`) // Output port number
})
