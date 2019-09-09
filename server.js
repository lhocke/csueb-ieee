const express = require('express');
const helmet = require ('helmet')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet())

app.listen(PORT, () => {                // ExpressJS server start
    console.log(`Listening on ${PORT}`) // Output port number
})
