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

const cityName = document.querySelector('city-name');
const cityLocation = document.querySelector('city-location');
// name to location, push location to local
const timeCurrent = document.querySelector('time-current');
const fiveDayForecast = [];
const displayKey=  [];
const submitBtnEl = document.querySelector('submit')
// add listner to submit button
submitBtnEl.addEventListener('click', locationQuery);
var weatherApiKey = "7a2db2f596eb6b607d917c5d588554f0";
var apiAddress = //not necessary?
function locationQuery(){
    // consult api with name
        let lat, lon
        url = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + weatherApiKey;
        fetch(url).then(response => response.json()).then(function(data) {
            lat = data[0].lat;
            lon = data[0].lon;
            populateCurrentWeatherTitle(data[0].name + ", " + data[0].country);
            getOneCallData(lat, lon);
            console.log("lat")
            // check return
        });
        return {"lat": lat, "lon":lon};
}

function weatherQuery(){
    // consult weather api with location
}