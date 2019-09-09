const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {                // ExpressJS server start
    console.log(`Listening on ${PORT}`) // Output port number
})
