const express = require('express');

const app = express();

const list = {
    "results": [
    "SONU",
    "ANWAR",
    "ARSHAD",
    "NAZIR"
    ]
   }

app.get('/student/studentList',(req,res)=>{
    res.send(list)
})

const port = process.env.PORT || 4000;
app.listen(4000, ()=>{
    console.log('running on port 4000');
})