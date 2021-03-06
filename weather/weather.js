const request = require('request');

getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/<dark-sky-api-key>/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch the weather information.');
    }
  });
}

module.exports = {
  getWeather
}
