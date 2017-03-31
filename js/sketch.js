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
	createCanvas(1000,1000);
	button = select('#submit');
	city = select('#city');	
	button.mousePressed(queryAPI);
}

function keyPressed(){
	if(keyCode == ENTER){
		queryAPI();
	} else if (keyCode == RETURN){
		queryAPI();
	}
}

function queryAPI(){
	var query = baseURL + city.value() + "&apiKey=" + apiKey + '&units=' + units;
	loadJSON(query, getWeatherData); 
}

function getWeatherData(apiData){
	weatherData = apiData;
	temperature = weatherData.main.temp;
	humidity = weatherData.main.humidity;
	minTemp = weatherData.main.temp_min;
	maxTemp = weatherData.main.temp_max;
	console.log(weatherData);
}

// ****** Draw function ***** //
function draw(){
	background(255);
	fill(0);
	noStroke();
	colorMode(HSB);
	if (weatherData){
		var posTemp = Math.abs(temperature);
    	var posMax = Math.abs(maxTemp);
    	var posMin = Math.abs(minTemp);
		// max and min temperature//
		noFill();
		strokeWeight(1);
		stroke(0);
		ellipse(200, 20 + posMax * 10, posMax * 20, posMax * 20);
		ellipse(200, 20 + posMax * 10, posMin * 20, posMin * 20);
		// temperature//
		if(temperature >= 0) {
		fill(0,temperature * 10,temperature * 10);
		ellipse(200, 20 + posMax *10 , posTemp * 20, posTemp * 20);
		text('Temperature: ' + nfc(temperature,0), 100, 10);
	}
		else if(temperature < -1){
		fill(218, posTemp * 10, posTemp * 10);
		ellipse(200, 20 + posMax * 10, posTemp * 10, posTemp * 10);
		text('Temperature: ' + nfc(temperature,0), 100, 10);
	}
	    

	// ellipse(200 + humidity + maxTemp * 10, 20 + maxTemp * 10, humidity, humidity);
	// 	text('Humidity: ' + nfc(humidity,0), 100, 500 );
}
}
	// 	// humidity //
			
	

// }
