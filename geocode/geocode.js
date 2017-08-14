const request = require('request');
const googleApisAddressURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

function geocodeAddress(address, callback) {
  var encodedAddress = encodeURIComponent(address);
  request({
    url: `${googleApisAddressURL}${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if(error) {
      callback('Unable to connect to Google servers');
    } else if(body.status === 'ZERO_RESULTS') {
      callback('Unable to find the address');
    } else if(body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
}

module.exports = {
  geocodeAddress
}
