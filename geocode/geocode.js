const request = require('request');
const googleApisAddressURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

function geocodeAddress(address) {
  encodedAddress = encodeURIComponent(address);
  request({
    url: `${googleApisAddressURL}${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if(error) {
      console.log('Unable to connect to Google servers');
    } else if(body.status === 'ZERO_RESULTS') {
      console.log('Unable to find the address');
    } else if(body.status === 'OK') {
      console.log(`Formatted Address: ${body.results[0].formatted_address}`);
      console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
  });
}

module.exports = {
  geocodeAddress
}
