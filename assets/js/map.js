
function mapsInit(canvas,pos,showMarker,zoom) {
	
	var imageA = [];
	if(showMarker==='area' || showMarker==='direct') {
		var imageA = [];
		//imageA[0] = 'images/1/'+showMarker+'.png';
		imageA[0] = 'images/1/marker.png';
		imageA[1] = 253;
		imageA[2] = 113;
		imageA[3] = 0;
		imageA[4] = 57;	
	} else {
		showMarker = false;	
	}

	offset_center_y = 0;
	
	//var styles = [ { "stylers": [ { "saturation": -100 }, { "lightness": -1 }, { "gamma": 0.86 } ] },{ "featureType": "road.highway", "elementType": "geometry.fill" } ];
  var styles = [ { "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#4caeab" } ] },{ "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "color": "#b9b09d" } ] },{ "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [ { "color": "#808080" } ] },{ "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#b9b09d" } ] },{ "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#808080" } ] },{ "featureType": "landscape.natural.landcover", "elementType": "geometry.fill", "stylers": [ { "visibility": "off" } ] },{ "featureType": "poi", "stylers": [ { "visibility": "simplified" } ] },{ "featureType": "poi.park", "stylers": [ { "visibility": "off" } ] },{ "featureType": "landscape.natural", "stylers": [ { "visibility": "off" } ] },{ "featureType": "poi", "elementType": "geometry.fill", "stylers": [ { "color": "#e9e3d3" } ] },{ "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "color": "#e9e3d3" } ] },{ "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "color": "#d6dccc" } ] },{ "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ { "color": "#555555" } ] },{ } ];

  var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
	var geocoder = new google.maps.Geocoder();
	var _x = 50.91; //ger
	var _y = 9.853; //ger
	var latlng;
	if(typeof pos === 'string') {
		geocoder.geocode( { 'address': pos}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				//alert('Stat:'+ google.maps.GeocoderStatus.OK + ' --> ' + results[0].geometry.location.lb+' '+results[0].geometry.location.mb);
				//console.log('results',results);
				_x = results[0].geometry.location.ob;
				_y = results[0].geometry.location.pb;
				latlng = new google.maps.LatLng(_x, _y);
				map.setCenter(latlng);
				map.setZoom(zoom);
				if(showMarker) marker.setPosition(latlng);
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});		
	} else {
		_x = pos[0];
		_y = pos[1];
		//map.setZoom(zoom);
	}
	_xyString = "("+_x+","+_y+")";
	
	//alert('B' + _xyString);
  	
	latlng = new google.maps.LatLng(_x, _y);
	latlng_center = new google.maps.LatLng(_x, _y-offset_center_y);
	var mapOptions = {
		zoom: 4,
		disableDefaultUI: true,
		center: latlng_center,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		},
		scrollwheel: false
	}
	var map = new google.maps.Map(document.getElementById(canvas), mapOptions);
	map.setZoom(zoom);
	//alert('C');
	map.setCenter(latlng_center);
	if(showMarker) {
		var image = new google.maps.MarkerImage(imageA[0],
		// This marker is 20 pixels wide by 32 pixels tall.
		new google.maps.Size(imageA[1],imageA[2]),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image is the base of the flagpole at 0,32.
		new google.maps.Point(imageA[3],imageA[4]));
		var marker = new google.maps.Marker({
			map: map,
			position: latlng,
			icon: image
		});
	}
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
	
	google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(mapOptions.center);
	});
	
	return map;
}// JavaScript Document