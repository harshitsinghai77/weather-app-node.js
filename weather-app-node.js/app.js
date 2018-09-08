const request = require('request');
const express = require('express');
const app = express()
const bodyParser = require('body-parser')

const location = require('./location.js')
const forecast = require('./forecast.js')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));

let data = 'No data to display'

app.get('/', (req, res)  => {
    res.render('home.ejs')
})

app.get('/weather', (req, res) => {
    res.render('weather.ejs' , {data : data})
})

app.post("/address", (req, res) => {
    let address = req.body.address;
    location.getLocation(address).then((result) => {
            forecast.getForecast(result.latitude, result.longitude).then((forecastData) => {
                let tempData = {
                    address: result.address,
                    latitude : forecastData.latitude,
                    longitude : forecastData.longitude,
                    time : forecastData.currently.time,
                    summary : forecastData.currently.summary,
                    hourlySummary : forecastData.hourly.summary,
                    temp : forecastData.currently.temperature,
                    apparentTemperature : forecastData.currently.apparentTemperature,
                    humidity : forecastData.currently.humidity,
                    pressure : forecastData.currently.pressure,
                    windSpeed : forecastData.currently.windSpeed,
                    ozone : forecastData.currently.ozone,
                }
                data = tempData
                res.redirect('/weather')
            }, (error) => {
                console.log(error)
                data = error
                res.redirect('/weather')
            })
        }, (message) => {
            data = message
            console.log(message)
            res.redirect('/weather')
    })
});


const PORT = process.env.PORT || 3000 
app.listen(PORT) 