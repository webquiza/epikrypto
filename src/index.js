import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#compare').click(function() {
    const lang = $('#language').val();
    $('#language').val("");

    let request = new XMLHttpRequest();
    const url = `https://min-api.cryptocompare.com/data/v2/news/?lang=${lang}&api_key=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showNews').text(`${response.Message}. Check your console!`);
      console.log(response);

      /* or use the following for additional specificity/JSON parsing
      console.log(response.Data[0].url);
      */
    }
  });
});


