# Weather-App
This is a simple command line node app which makes use of the google maps API to get the location and weather information.

To use, download the repository, install the required packages using `npm install` and execute app.js using node.

Help :
```
Weather-App user$ node app.js --help
Options:
  -a, --address  Address to fetch weather and location for                [string] [required]
  --help, -h     Show help                                             [boolean]
```
Address could be a ZIP Code or Text.

Examples:
```
Weather-App user$ node app.js -a 560001
It is 70.79°F in Bengaluru, Karnataka 560001, India but it feels like 71.4°F.
```
```
Weather-App user$ node app.js --address 'Taj Mahal'
It is 83.88°F in Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India but it feels like 89.59°F.
```
