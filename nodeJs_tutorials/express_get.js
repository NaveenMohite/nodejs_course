const express = require('express');
const app = express();

// app.get('/',(req,res)=>{
// res.send('This is express framework example');
// });

app.get('/example',(req,res)=>{
res.send('hitting exampe route  ');
});
    
app.get('/example/:name/:age',(req,res)=>{
console.log(req.params);
console.log(req.query);
res.send(req.params.name +" : "+req.params.age);
});


//serving static file using express
const path = require('path');
app.use('/public',express.static(path.join(__dirname,'static')));
app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'static','index.html'))
});


app.listen(3000);










