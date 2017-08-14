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
Formatted Address: Bengaluru, Karnataka 560001, India
Latitude: 12.9765944
Longitude: 77.5992708
```
```
Weather-App user$ node app.js -a 'S.P. Infocity, Chennai'
Formatted Address: No.40, MGR Nedunchalai South, Kandanchavadi, Perungudi, Chennai, Tamil Nadu 600096, India
Latitude: 12.9696196
Longitude: 80.2440227
```
