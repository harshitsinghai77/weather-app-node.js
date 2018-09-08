# Weather App build on Node.js
A weather app based on google's geo-location API and Dark Sky API to fetch real time data. App will automatically fetch the coordinates of the location and request the data from Dark Sky. The app has been deployed to Heroku and Microsoft Azure platforms. 

## About Dark Sky API
Dark Sky API is the easiest, most advanced, weather API on the web.The first 1,000 API requests you make every day are free of charge.Every API request over the free daily limit costs $0.0001.

## About Dark Sky API
Head on to https://darksky.net/dev/account on succesfull registration. Copy the secret key and paste it to keys.js as shown below.

![Alt text](/screenshot/shadoweather1.JPG?raw=true "Dark Sky API Secret key")

Copy the secret key and paste it to keys.js file

```node
module.exports = {
    darkSkyApi: 'YOUR DARK SKY API KEY HERE'
}
```
## Installation
Replace the dark sky secret key in keys.js file before processing to these steps.

```command
$ cd weather-app-node.js
$ npm install
$ node app.js
```

## Dark Sky API
For more information about the API check https://darksky.net/dev/docs

## Azure Platform
https://shadoweather.azurewebsites.net/

## HerokuApp
https://shadoweather.herokuapp.com/

## Demo
https://shadoweather.azurewebsites.net/ <br />
https://shadoweather.herokuapp.com/
