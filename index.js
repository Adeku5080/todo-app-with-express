const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const morgan = require('morgan');



app.use(bodyParser.urlencoded({extended:true }))
app.use(bodyParser.json())
app.use(morgan('dev'))

const db = [];

app.post('/todos',(req,res)=>{
    const newTodo = {
        id : Date.now(),
        text : req.body.text
    }

    db.push(newTodo);

    res.json(newTodo);
})

app.get('/todos',(req,res)=>{
    res.json(db);
})

app.listen(3001,()=>{
    console.log('port 3001 is alive');
})

