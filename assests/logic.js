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
$(document).ready(function(){
const timeCurrent = document.querySelector('time-current');
const submitBtnEl = document.querySelector('#search-weather-btn')
// add listner to submit button
var weatherApiKey = "7a2db2f596eb6b607d917c5d588554f0";
var apiAddress = //not necessary?


$('#search-weather-btn').on('click', function(e){
    e.preventDefault()
    console.log("click")
    let city = $("#city-name").val();
    console.log(`city:${city}`)
    searchWeather(city)
})

function searchWeather(city){
    // consult api with name   
    let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7a2db2f596eb6b607d917c5d588554f0&units=imperial`
        fetch(queryUrl).then(response => response.json()).then(function(data) {
            console.log(data)
            
            // check
        }
}

function addWeatherData(){
            $("#current-temperature").text(data.main.temp);
            $("#current-humidity").text(data.main.humidity);
            $("#current-wind-speed").text(data.main.windspeed + " mph");
            $("#current-uvi").text(data.main.uvi);


}
});