/**
 *  
 * 
 */


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Joi = require('joi');
const app = express();
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());


app.use('/public',express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'))
});

app.post('/',(req,res)=>{
    console.log(req.body);
    //data base work here
    const schema =  Joi.object().keys({
        text : Joi.string().text().required(),
        password : Joi.string().min(5).max(10).required()
    });
    Joi.validate(req.body,schema,(err,result)=>{
        if(err) {
            console.log(err);
        res.send('an error has occure');
    }
    console.log(result);
    res.send('successfully posted data');
    });

    // res.send('successfully posted data');
});

app.listen(3000);