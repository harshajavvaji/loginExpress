const express = require('express')
const bodyparser = require('body-parser');
const connect  = require('./connect/connect') 
const app = express();


const port = 3000


connect();
app.use(express.json());
app.use(bodyparser.json({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));


app.use('/api/user', require('./routes/login'))


app.get('/' , (req, res) => {
    res.send('Hello World')
});

app.listen(port, () => {});