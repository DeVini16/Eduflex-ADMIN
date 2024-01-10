const express = require('express')
const cors = require('cors')
// const routes = require('routes/routes.js')
const app = express()


app.use(express.json())
app.use(cors())
// app.use(routes)

app.get('/', (req, res) => {
    res.send(new Date())
})

app.listen(8080, (req, res) => {
    console.log("QAP server")
})