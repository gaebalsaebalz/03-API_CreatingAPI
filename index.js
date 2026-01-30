const express = require('express')
const cors = require('cors')
const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req,res) => {
    res.send('Life is potato');
});

app.get('/dog', (req,res) => {
    res.json({'sound': '멍멍'});
});

app.get('/cat', (req,res) => {
    res.json({'sound': '야옹'});
});

app.listen(port,()=>{
    console.log('Example app listening on port ${port}');
});