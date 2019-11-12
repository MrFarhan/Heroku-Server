const express = require('express')
const app = express()
const port = process.env.PORT
const bodyParser = require('body-parser');
const fetch = require('node-fetch')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/favicon.ico', (req, res) => res.send('Hello World!'))
app.post("/hello", (req, res) => {

    console.log(`Servier is running`)
    var newRequest = require('request');
    newRequest(`https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=0f7c8b20f4669c9b103c7b80a2ec1e78`, function (error, response, body) {
        if (!error) {
            // var responseReveived = response;
            // console.log("response is ", responseReveived)
            console.log("body is", body)
            var data = JSON.parse(body)
            console.log("data is", data)
        } else (error) => {
            console.log("error is ", error)
        }
    })
}

)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))