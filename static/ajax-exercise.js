"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    $.get('/fortune', (res) =>{
        $('#fortune-text').html(res);
    });
}

$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, (response) => {
        $('#weather-info').html(response['forecast']);
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    let url = "/order-melons.json";
    let formData = $('#order-form').serialize();
    $.post(url, formData, (response) => {
        if (response.code==='ERROR') {
            $('#order-status').addClass("order-error");
        }
        $('#order-status').html(response['msg']);
    });
}

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)


$("#order-form").on('submit', orderMelons);


