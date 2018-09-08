const request = require('request')

const getLocation = (address) => {
    return new Promise((resolve, reject) => {
        const location = encodeURIComponent(address)
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${location}`,
            json : true}, (error, response, body) => {
           if(error){
                reject('Unable to connect to server')
            }else if (body.status === 'ZERO_RESULTS'){
                reject('Address does not exist. Please try to be more specific.')
            } else if(body.status === 'OK') {
                resolve({
                    address : body.results[0].formatted_address,
                    latitude : body.results[0].geometry.location.lat,
                    longitude : body.results[0].geometry.location.lng
                })
            }
        });
    })
}

module.exports.getLocation = getLocation