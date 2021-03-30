function initialize(casos) {
    var latlngRepDom = new google.maps.LatLng(18.735693, -70.162651);
 
    var options = {
        zoom: 4, center: latlngRepDom,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), options);

    casos.forEach((caso) => {
        if (caso.latitud && caso.longitud) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(caso.latitud, caso.longitud),
                map: map,
            });
        }
    })

    
}
