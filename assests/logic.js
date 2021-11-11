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

updateHistoryDisplay( JSON.parse( localStorage.getItem("weatherDashboardHistory") ) );
search("Seattle");

startBtn.click( function() {
    let city = $("input").val();
    addHistory(city);
    search(city);
} );



function location(city) {
    let lat, lon;
    url = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + '&limit=1&appid=' + apiKey;
    // api working
    fetch(url).then(response => response.json()).then(function(data) {
        lat = data[0].lat;
        lon = data[0].lon;
        weatherTitle(data[0].name + ", " + data[0].country);
        getOneCallData(lat, lon);
    });
    return {"lat": lat, "lon":lon};
}

function addWeatherData(temp, humidity, windspeed, uvi){
    $('#current-temperature').text(temp)
    $('#current-humidity').text(humidity)
    $('#current-windspeed').text(windspeed)
    $('#current-uvi').text(uvi)
}

function weatherTitle(city){
    $('#current-city').text(city + "currently: ")

}

function renderForecat(forecast){
    let cards = reportContainer.children();
    // iterate through cards
    for(let i=0; i< cards.length; i++){
        $(cards[i]).find("h3.day").text(moment(now).add(i+1, "d").format("dddd"));
        $(cards[i]).find("span.forecast-temperature").text(forecast[i].temp.day);
        $(cards[i]).find("span.forecast-humidity").text(forecast[i].humidity);
    }
}



