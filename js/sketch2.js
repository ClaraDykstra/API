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
		// ellipse(200, 40 + posMax * 10, posMax * 20, posMax * 20);
		// ellipse(200, 20 + posMax * 10, posMin * 20, posMin * 20);
		// temperature//
		if(temperature >= 0) {
		fill(0,temperature * 10,temperature * 10);
		ellipse(300, 60 + posMax * 10 , temperature * 25, temperature * 25);
		strokeWeight(0);
		textSize(16);
		text('Temperature: ' + nfc(temperature,0)+ ' C', 100, 20);
	}
		else if(temperature < -1){
		fill(218, posTemp * 10, posTemp * 10);
		ellipse(300, 60 + posMax * 10, posTemp * 25, posTemp * 25);
		noStroke();
		textSize(16);
		text('Temperature: ' + nfc(temperature,0)+' C', 100, 20);
	}
	    
		if(posMax > posTemp) {
		strokeWeight(3);
		stroke(0);
		// stroke(0, maxTemp * 10, maxTemp * 10);
		ellipse(300, 60 + posMax *10 , posMax * 25, posMax * 25);
		strokeWeight(0);
		textSize(12);
		fill(0);
		text('Max Temp: ' + nfc(maxTemp,0)+ ' C', 100, 35);
	}
		else if(posMax < posTemp){
		strokeWeight(3);
		stroke(255);
		// stroke(218, posMax * 10, posMax * 10);
		ellipse(300, 60 + posMax * 10, posMax * 25, posMax * 25);
		strokeWeight(2);
		stroke(0);
		fill(255);
		textSize(13);
		text('Max Temp: ' + nfc(maxTemp,0) +' C', 100, 35);
	}

	if(posMin > posTemp) {
		strokeWeight(3);
		noFill();
		stroke(0, minTemp * 10, minTemp * 10);
		ellipse(300, 60 + posMax * 10 , posMin * 25, posMin * 25);
		strokeWeight(0);
		textSize(12);
		fill(0);
		text('Min Temp: ' + nfc(minTemp,0)+ ' C', 100, 50);
	}
		else if(posMin < posTemp){
		strokeWeight(3);
		noFill();
		stroke(255);
		// stroke(218, minTemp * 10, minTemp * 10);
		ellipse(300, 60 + posMax * 10, posMin * 25, posMin * 25);
		strokeWeight(2);
		stroke(0);
		fill(255);
		textSize(13);
		text('Min Temp: ' + nfc(minTemp,0) +' C', 100, 50);
	}
	// ellipse(200 + humidity + maxTemp * 10, 20 + maxTemp * 10, humidity, humidity);
	// 	text('Humidity: ' + nfc(humidity,0), 100, 500 );
}
}
	// 	// humidity //
			
	

// }
