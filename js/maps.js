$(document).ready(function(){

     //data-toggle="modal" data-target="#myModal"
     $(".odd").attr("id","hola");
     //$(".odd").attr("data-toggle","modal");
     //$(".odd").attr("data-target","#myModal");
     var rows= document.getElementById('hola');
     var rows2 =document.getElementsByClassName('odd');





function whatClicked(event) {
	var last = event.target.nextSibling.nextSibling.innerHTML;
	var longi = event.target.nextSibling.nextSibling.nextSibling.innerHTML;
    	alert(event.target.innerHTML);
		 alert(last + " " + longi);

}

rows.addEventListener("click", whatClicked);

});
function initMap() {
        var myLatLng = {lat: -25.363, lng: 131.044};

        var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: myLatLng
        });

        var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hello World!'
        });
}
