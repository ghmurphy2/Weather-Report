//begin with framework for bars
//search bar with input to popultate bars with info
//begin with query to location api, console log to confirm connection with location api, city to numerical value
//establish api output as query for weather api
// consolt weather docs for api filter info
// populate bars with filtered information from weather api
// push weather info to local storage
// second page for five day? display current and options page one, five on next page after click
// max five bars for queries
// style
// name to location, push location to local
initStorage();

var startBtn = $('button');
var reportContainer = $('#report-container');
var apiKey = '7a2db2f596eb6b607d917c5d588554f0';
var currentTime = moment();


$('#search-weather-btn').on('click', function(e){
    e.preventDefault()
    console.log("click")
    let city = $("#city-name").val();
    console.log(`city:${city}`)
    searchWeather(
    addWeatherData(temp))
})
function location(city) {
    let lat, lon;
    url = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=7a2db2f596eb6b607d917c5d588554f0&units=imperial";
    fetch(url).then(response => response.json()).then(function(data) {
        lat = data[0].lat;
        lon = data[0].lon;
        populateCurrentWeatherTitle(data[0].name + ", " + data[0].country);
        getOneCallData(lat, lon);
    });
    return {"lat": lat, "lon":lon};
}

function addWeatherData(temp, humidity, windspeed, uvi){
    currentTemp.append("temp");
    currentHumidity.innerHtml(humidity);
    $("#current-wind-speed").innerHtml(windspeed + " mph");
    $("#current-uvi").innerHtml(uvi);


}

function searchWeather(city){
    // consult api with name   
    let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=7a2db2f596eb6b607d917c5d588554f0&units=imperial`
        fetch(queryUrl).then(response => response.json()).then(function(data) {
            console.log(data)
            
            // check
        })
    }
});
// call in data
function populateCurrentWeatherData(temp, humidity, windspeed, uvi) {
    $("#current-temperature").text(temp);
    $("#current-humidity").text(humidity);
    $("#current-wind-speed").text(windspeed + " mph");

    function popCurrentName(city) {
        $("#current-city").text(city + "has a temperature forecast of");
    }
    
    function populateForecastWeather(forecast) {
        let cards = forecastContainer.children();
        for(let i=0; i<cards.length; i++) {
            $(cards[i]).find("h3.day").text(moment(now).add(i+1, "d").format("dddd"));
            $(cards[i]).find("span.forecast-temperature").text(forecast[i].temp.day);
            $(cards[i]).find("span.forecast-humidity").text(forecast[i].humidity);
            $(cards[i]).find("img.forecast-uvi").attr("src", "https://openweathermap.org/img/wn/" + forecast[i].weather[0].icon + ".png");
        }