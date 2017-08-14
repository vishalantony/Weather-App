const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather and location for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  if(response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find the address');
  }
  let lat = response.data.results[0].geometry.location.lat;
  let lng = response.data.results[0].geometry.location.lng;
  let weatherUrl = `https://api.darksky.net/forecast/dummy-api-key/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response) => {
  let temperature = response.data.currently.temperature;
  let apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`Its currently ${temperature}°F. It feels like ${apparentTemperature}.°F`);
}).catch((e) => {
  if(e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers');
  } else {
    console.log(e.message );
  }
});
