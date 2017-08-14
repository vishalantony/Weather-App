const request = require('request');

getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/1639b661124c44eb2f70365a904417a0/${lat},${lng}`,
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
