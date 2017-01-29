//listen when the user click on the hamburger icon
$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('.navi').toggleClass('open');
	});
	$(".back_side").click(function() {$('html, body').animate({scrollTop: $(".banner").offset().top}, 1200);	});
	$("#food_nav").click(function() {$('html, body').animate({scrollTop: $(".food_drink").offset().top}, 1200);	});
	$("#drink_nav").click(function() {$('html, body').animate({scrollTop: $(".drink").offset().top}, 1200);});
	$("#news_nav").click(function() {$('html, body').animate({scrollTop: $(".news").offset().top}, 1200);});
	$("#photos_nav").click(function() {$('html, body').animate({scrollTop: $(".photos").offset().top}, 1200);});
	$("#access_nav").click(function() {$('html, body').animate({scrollTop: $(".access").offset().top}, 1200);});
  $("#recruit_nav").click(function() {$('html, body').animate({scrollTop: $(".recruit").offset().top}, 1200);});
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

						function news_carousal_right() {
							if(slide_number<8){
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
								$(".highlight:nth-child(" + (slide_number) + ")").css("display", "none");
								$(".highlight:nth-child(" + (slide_number+1) + ")").css("display", "block");
							}
						}
						function news_carousal_left() {
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
								$(".highlight:nth-child(" + (slide_number+1) + ")").css("display", "block");
								$(".highlight:nth-child(" + (slide_number+2) + ")").css("display", "none");
							}

						}
            $(".right_arrow").click(function(){
      				news_carousal_right();
            });

            $(".left_arrow").click(function(){
							news_carousal_left();
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
