//listen when the user click on the hamburger icon
$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('.navi').toggleClass('open');
	});
});

// Using this for Carousel Sliding for News
$(document).ready(function(){
            var window_width = $(window).width();
            var main_width = $(".main_container").width();
            var long_container = $(".long_container");
            var item = $(".item");
            var slide_number = 0;

            long_container.css("width",main_width*9);
            item.css("width",long_container.width()/9);

            $(".right_arrow").click(function(){
              if(slide_number<9){
                slide_number++;

                if(slide_number==8){
                  $(".right_arrow").animate({opacity:0});
                }
                else{
                  $(".right_arrow").animate({opacity:1});
                }
                if(slide_number==0){
                  $(".left_arrow").animate({opacity:0});
                }
                else{
                  $(".left_arrow").animate({opacity:1});
                }
                var item_width = $(".item").width();
                var pixels_moved = item_width*slide_number;

                long_container.animate({
                  marginLeft: -pixels_moved
                });
              }
            });

            $(".left_arrow").click(function(){
              if(slide_number>0){
                slide_number--;

                if(slide_number==0){
                  $(".left_arrow").animate({opacity:0});
                }
                else{
                  $(".left_arrow").animate({opacity:1});
                }
                if(slide_number==8){
                  $(".right_arrow").animate({opacity:0});
                }
                else{
                  $(".right_arrow").animate({opacity:1});
                }
                var item_width = $(".item").width();
                var pixels_moved = item_width*slide_number;

                long_container.animate({
                  marginLeft: -pixels_moved
                });
              }
            });
          });
$(document).ready(function(){

					  var myCenter = new google.maps.LatLng(35.6408987,139.6923569);
						var mapCanvas = document.getElementById("map");
					  var styles = [
					    {
					       "featureType": "landscape",
					       "stylers": [
					           {
					               "hue": "#FFAD00"
					           },
					           {
					               "saturation": 50.2
					           },
					           {
					               "lightness": -34.8
					           },
					           {
					               "gamma": 1
					           }
					       ]
					    },
					    {
					       "featureType": "road.highway",
					       "stylers": [
					           {
					               "hue": "#FFAD00"
					           },
					           {
					               "saturation": -19.8
					           },
					           {
					               "lightness": -1.8
					           },
					           {
					               "gamma": 1
					           }
					       ]
					    },
					    {
					       "featureType": "road.arterial",
					       "stylers": [
					           {
					               "hue": "#FFAD00"
					           },
					           {
					               "saturation": 72.4
					           },
					           {
					               "lightness": -32.6
					           },
					           {
					               "gamma": 1
					           }
					       ]
					    },
					    {
					       "featureType": "road.local",
					       "stylers": [
					           {
					               "hue": "#FFAD00"
					           },
					           {
					               "saturation": 74.4
					           },
					           {
					               "lightness": -18
					           },
					           {
					               "gamma": 1
					           }
					       ]
					    },
					    {
					       "featureType": "water",
					       "stylers": [
					           {
					               "hue": "#00FFA6"
					           },
					           {
					               "saturation": -63.2
					           },
					           {
					               "lightness": 38
					           },
					           {
					               "gamma": 1
					           }
					       ]
					    },
					    {
					       "featureType": "poi",
					       "stylers": [
					           {
					               "hue": "#FFC300"
					           },
					           {
					               "saturation": 54.2
					           },
					           {
					               "lightness": -14.4
					           },
					           {
					               "gamma": 1
					           }
					       ]
					    }
					  ];
						var mapOptions = {
									center: myCenter,
									zoom: 15,
									disableDefaultUI: true,
									styles,
									zoomControl: false,
									scrollwheel: false,
									navigationControl: false,
									mapTypeControl: false,
									scaleControl: false,
									draggable: false,
								};
					  var map = new google.maps.Map(mapCanvas, mapOptions);
					  var pin = {
					    url: "images/pin_map.png", // url
					    // size: new google.maps.Size(300, 150), // size
					     scaledSize: new google.maps.Size(100, 50), // scaled size
					    //  origin: new google.maps.Point(0,0), // origin
					    //  anchor: new google.maps.Point(0, 0) // anchor
					  };
					  var marker = new google.maps.Marker({
					      position: myCenter,
					      icon: pin,
					      animation:google.maps.Animation.BOUNCE
					    });
					    marker.setMap(map);

							var center;
						function calculateCenter() {
						  center = map.getCenter();
						}
						google.maps.event.addDomListener(map, 'idle', function() {
						  calculateCenter();
						});
						google.maps.event.addDomListener(window, 'resize', function() {
						  map.setCenter(center);
						});

});
