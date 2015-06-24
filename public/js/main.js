(function(){

	var themes = [
		'Seguridad web',
		'Hacking',
		'Linux básico',
		'Linux avanzado',
		'Redes',
		'Aplicaciones moviles',
		'Criptografia',
		'UI',
		'UX',
		'Startups',
		'Pizza',
		'Cerveza',
		'#Hackcon'
	];

	typeout('.typeout', themes, {
		callback: function(el) {
			el.innerHTML += " by Area 51.";
		}
	});


	function initializeMap()
	{
		var mapCanvas = document.getElementById('map-canvas');

		var mapOptions = {
			center: new google.maps.LatLng(-2.169624, -79.910259),
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true,
			disableDoubleClickZoom: true,
			draggable : false,
			zoomControl: false,
			scrollwheel: false

		};

		var myLatlng = new google.maps.LatLng(-2.169624, -79.910259);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Hello World!'
		});

		var map = new google.maps.Map(mapCanvas, mapOptions);
		marker.setMap(map);


	}

	initializeMap();
	React.render(React.createElement(ItemComponent, null) , document.getElementById('charlas'));


})();
