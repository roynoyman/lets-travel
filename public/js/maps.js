let platform = new H.service.Platform({
    'apikey': 'CQWDNnBvHlmRewOrabDj60Zk_4qLsFQNfF_mlItrmMc'
});



function landmarkGeocode() {
  let title = document.querySelector('h1').textContent;
  let geocoder = platform.getSearchService(),
      landmarkGeocodingParameters = {
        q: title,
        at: '0,0',
        limit: 1
      };

  geocoder.discover(
    landmarkGeocodingParameters,
    showMap,
    (e) => console.log(e)
  );
}

function showMap(result){
  let location = result.items[0].position;
  console.log(location);
  // Obtain the default map types from the platform object:
  let defaultLayers = platform.createDefaultLayers();
  let map = new H.Map(
    document.querySelector('.map'),
    defaultLayers.vector.normal.map,
    {
      zoom: 15,
      center: { lat: location.lat, lng: location.lng }
    });
    let locationMarker = new H.map.Marker({lat:location.lat, lng:location.lng});
    map.addObject(locationMarker);
    // Create the default UI:
    let ui = H.ui.UI.createDefault(map, defaultLayers);
}

landmarkGeocode();



