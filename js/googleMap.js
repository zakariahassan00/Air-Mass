// Google map
function initMap() {
  const myLatLng = { lat: 30.012083, lng: 31.429743 };
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: myLatLng,
    zoom: 12
  });

  const marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Air Mass"
  });
}
