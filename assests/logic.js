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
// add listner to submit button
userFormEl.addEventListener('submit', formSubmitHandler);
languageButtonsEl.addEventListener('click', buttonClickHandler);

