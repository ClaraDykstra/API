// ***** Global variables ***** //
var apiKey = 'cded78eb3396fe8142a7170986ee16c0';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city;
var units = 'metric';
var weatherData;
var temperature = 0;
var humidity = 0;
var button;


// ****** Preload function ***** //
// function preload(){
	
// 	console.log('the json file has been loaded...');
// }

// ****** Set up function ***** //
function setup(){
	createCanvas(800,800);
	button = select('#submit');
	city = select('#city');	
	button.mousedPressed(queryAPI);
}

function queryAPI(){
	var query = baseURL + city.value() + "&apiKey=" + apiKey + '&units=' + units;
	loadJSON(query, getWeatherData); 
}

function getWeatherData(apiData){
	weatherData = apiData;
	temperature = weatherData.main.temp;
	humidity = weatherData.main.humidity;
	console.log(weatherData);
}

// ****** Draw function ***** //
function draw(){
	background(255);
	fill(0);
	noStroke();
	console.log(weatherData);
	if (weatherData){
		ellipse(200,200, temperature * 10, temperature * 10);	
	}

}
