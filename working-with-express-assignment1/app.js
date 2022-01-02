const express = require('express')

const app = express()

app.use('/user', (req, res, next) => {
    res.send('<h1>This is the user page</h1>')
})

app.use('/', (req, res, next) => {
    res.send('<h1>This is the homepage</h1>')
})

app.listen(3000)

// const express = require('express');

// const app = express();

// app.use('/',(req,res,next)=>{
//   console.log('this runs for all routes');
//   next();
// })

// app.use('/something',(req,res)=>{
//   console.log(`this runs for only the something route`);
//   res.send('something')
// })

// app.listen(3000,()=>{
//   console.log('express server running')
// })