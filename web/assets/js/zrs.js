$(function() {
    // Setup leaflet map
    var map = new L.Map('map');

    var basemapLayer = new L.TileLayer('http://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png');

    // Center map and default zoom level
    map.setView([51.5, 10.5], 6);


    // Adds the background layer to the map
    map.addLayer(basemapLayer);

    // Colors for AwesomeMarkers
    var _colorIdx = 0,
        _colors = [
          'blue',
          'red',
          'orange',
          'green',
          'purple',
          'darkred',
          'cadetblue',
          'darkgreen',
          'darkblue',
          'darkpurple'
        ];
        
    function _assignColor() {
        return _colors[_colorIdx++%10];
    }
    
    // =====================================================
    // =============== Playback ============================
    // =====================================================

	L.geoJson(lines, {
		style: function (feature) {
			return {color: 'black', weight:3, opacity: 1};
    		}
	}).addTo(map);
	L.geoJson(lines, {
		style: function (feature) {
			return {color: 'white', weight:2, opacity: 1, dashArray : '3, 3'};
    		}
	}).addTo(map);


    // Playback options
    var playbackOptions = {        
        // layer and marker options
        layer: {
            pointToLayer : function(featureData, latlng){
                var result = {};
                
                if (featureData && featureData.properties && featureData.properties.path_options){
                    result = featureData.properties.path_options;
                }
                
                if (!result.radius){
                    result.radius = 5;
                }
                
                return new L.CircleMarker(latlng, result);
            }
        },
        
        marker: function(){
            return {
                icon: L.AwesomeMarkers.icon({
                    prefix: 'fa',
                    icon: 'train', 
                    markerColor: _assignColor()
                }) 
            };
        }        
    };
    
    // Initialize playback
    playback = new L.Playback(map, tracks, null, playbackOptions);
    
    // Initialize custom control
    var control = new L.Playback.Control(playback);
    control.addTo(map);
    
    // Add data
    playback.addData(blueMountain);
       
});
