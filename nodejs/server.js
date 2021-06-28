let express = require('express');
let app = express()

let uuid = require('uuid');
let id = uuid.v4();
let port = 3000;

app.get('/',(req,res) => {
    res.send(id);
})

app.get('/login',(req,res) => {
    res.send(id);
})

app.listen(port,() => {
    console.log('port : ' + port);
})

