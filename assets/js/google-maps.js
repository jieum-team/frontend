function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 37.34187825749429, lng: 126.83151626755652};

    var map = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}