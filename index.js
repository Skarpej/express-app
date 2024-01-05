const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/greeting', (req, res) => {
    console.log(theName)
    res.send('Hi!')
})

let theName = ""

app.post('/greeting', (req, res) => {
    const { name } = req.body;
    theName = name;
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
