$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4d503fd893c48b741f882ccca4231972`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();


   const getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      // $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      const fahrenheit = Math.round(((response.main.temp - 273.15) * 1.8) + 32)
      $('.showTemp').text(`The temperature in Fahrenheit is ${fahrenheit} degrees.`);
      console.log(fahrenheit);
    }
  });
});
