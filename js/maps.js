$(document).ready(function() {

    /*
    data-toggle="modal" data-target="#myModal"
    adding attributes needded for bootstrap modal
    */
    $(".sorting_1").attr("id", "odRows");
    $(".sorting_1").attr("data-toggle", "modal");
    $(".sorting_1").attr("data-target", "#myModal");

    $(".odd").attr("id", "odRows");
    $(".odd").attr("data-toggle", "modal");
    $(".odd").attr("data-target", "#myModal");

    $(".even").attr("id", "evenRows");
    $(".even").attr("data-toggle", "modal");
    $(".even").attr("data-target", "#myModal");

    $( "#example_info" ).parent( "div" ).attr("class","col-sm-12");
    $( "#example_paginate" ).parent( "div" ).attr("class","col-sm-12");

    var rowsO = document.getElementById('odRows');
    var rowsE = document.getElementById('evenRows');

    /*
    ------------------------------------------------------
    ->Set a listener or event(click) to display
    **latitude
    **longitud
    display-mode: google map contained by a bootstrap modal
    -----------------------------------------------------
    */

    function whatClicked(event) {

        //get longitud and latitude from table
        var lati = parseInt(event.target.nextSibling.nextSibling.nextSibling.innerHTML);
        var longi = parseInt(event.target.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML);


        function initMap() {

            //Set coordinates
            var myLatLng = {
                lat: lati,
                lng: longi
            };

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: myLatLng
            });

            //Set a Marker a
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: event.target.innerHTML
            });
        }

        //call initMap here and callback in tag script is blank
        initMap();
    }

    rowsO.addEventListener("click", whatClicked);
    rowsE.addEventListener("click", whatClicked);

});
