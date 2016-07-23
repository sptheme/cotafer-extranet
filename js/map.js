(function ( $ )
{
	'use strict';
	
	var cfrMap = {
		
		/**
		 * Main init function
		 *
		 * @since 1.0.0
		 */
		init : function() {
			this.initDomElements();
			this.initMapElements();
			this.initMarkerPosition();
			this.addListeners();
		},

		initDomElements: function() {
			this.canvas = $('.property-map-canvas')[0],
			this.coordinate = $('.property-map-coordinate');
		},

		initMapElements: function() {
			var defaultLoc = $(this.canvas).data( 'default-location' ),
				latLng;

			defaultLoc = defaultLoc ? defaultLoc.split( ',' ) : [11.562108, 104.888535];
			latLng = new google.maps.LatLng( defaultLoc[0], defaultLoc[1] ); // Initial position for map

			this.map = new google.maps.Map( this.canvas, {
				center           : latLng,
				zoom             : 13,
				streetViewControl: 0,
				mapTypeId        : google.maps.MapTypeId.ROADMAP
			} );
			this.marker = new google.maps.Marker( { position: latLng, map: this.map, draggable: true } );
			this.geocoder = new google.maps.Geocoder();
		},

		// Initialize marker position
		initMarkerPosition: function ()
		{
			var coord = this.coordinate.val(),
				l,
				zoom;

			if ( coord )
			{
				l = coord.split( ',' );
				this.marker.setPosition( new google.maps.LatLng( l[0], l[1] ) );

				zoom = l.length > 2 ? parseInt( l[2], 10 ) : 14;

				this.map.setCenter( this.marker.position );
				this.map.setZoom( zoom );
			}
		},

		// Add event listeners for 'click' & 'drag'
		addListeners: function ()
		{
			var that = this;
			google.maps.event.addListener( this.map, 'click', function ( event )
			{
				that.marker.setPosition( event.latLng );
				that.updateCoordinate( event.latLng );
			} );
			google.maps.event.addListener( this.marker, 'drag', function ( event )
			{
				that.updateCoordinate( event.latLng );
			} );
		},

		// Update coordinate to input field
		updateCoordinate  : function ( latLng )
		{
			this.coordinate.val( latLng.lat() + ',' + latLng.lng() );
		},

	} //cfrMap

	cfrMap.init();	

})( jQuery );
