<<<<<<< HEAD
var app = angular.module('app', ['ngAnimate'])
=======
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCVlYwiaCNakcW2nFtFvSy1mV0iNBCRYjw",
    authDomain: "project-tequila.firebaseapp.com",
    databaseURL: "https://project-tequila.firebaseio.com",
    projectId: "project-tequila",
    storageBucket: "project-tequila.appspot.com",
    messagingSenderId: "663286812715"
  };
  firebase.initializeApp(config);
 //masonry 
   //$(window).on('load', function(){
    //  $('div.container').masonry({
    //      columnWidth: 'div.blocks',
     //     itemSelector: 'div.blocks'
    //  });
  //  })  
  // nav buttons for mobile
  $(".button-collapse").sideNav();
        
>>>>>>> 8a27415f92b96bd42745fdfcfeedc42291ff806d

app.controller('mainCtrl', function($scope) {
	$scope.boxes = [{
		name: 'Ocho',
		image: 'https://image.ibb.co/gPKyhx/ocho.jpg'
},
{
		name: 'Patron',
		image: 'https://image.ibb.co/cGmThx/Patron.jpg'
},
{
		name: 'Agave',
		image: 'https://image.ibb.co/hk4s9c/Herradura.jpg'
},
{
		name: 'Dulce Vida',
		image: 'https://image.ibb.co/njfX9c/Dulce_Vida.jpg'
},
{
		name: 'DonJulio',
		image: 'https://image.ibb.co/gKqohx/DonJulio.jpg'
},
{
		name: 'Casa Amigos',
		image: 'https://image.ibb.co/iUEs9c/Casa_Amigos.jpg'
},
{
		name: 'Avion',
		image: 'https://image.ibb.co/np5caH/Avion.jpg'
},
{
		name: '512',
		image: 'https://image.ibb.co/m20X9c/512.jpg'
	
},
{
		name: 'Altos',
		image: 'https://image.ibb.co/frnOFH/Altos.jpg'
}, ]

<<<<<<< HEAD
	$scope.selected = [];
	$scope.selectBox = function(item, position) {
		$scope.selected = [{
			item: item,
			position: position
		}];
		$scope.$apply();
	}
	$scope.clearSelection = function() {
		$scope.selected = [];
	}
})

app.directive('box', function() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
			onSelect: "=",
			item: "="
		},
		controllerAs: 'box',
		controller: function() {
			var box = this;

			box.goFullscreen = function(e) {
				box.onSelect(box.item, e.target.getBoundingClientRect())
			}
		},
		link: function(scope, element) {
			element.bind('click', scope.box.goFullscreen)
			element.css({
				'background-image': 'url(' + scope.box.item.image + ')'
			})
		}
	}
})

app.directive('bigBox', function($timeout) {
	return {
		restrict: 'AE',
		scope: {},
		bindToController: {
			position: "=",
			selected: "=",
			onSelect: "="
		},
		controllerAs: 'box',
		controller: function() {
			var box = this;
		},
		link: function(scope, element) {
			var css = {}
			for (var key in scope.box.position) {
				css[key] = scope.box.position[key] + 'px';
			}
			
			element.css(css);

			$timeout(function() {
				element.css({
					top: '50%',
					left: '10%'
				})
				element.addClass('image-out');
			}, 200)

			$timeout(function() {
				element.css({
					width: '80%',
					height: '100%'
				})
			}, 500)
			
			$timeout(function(){
				element.addClass('show');
			}, 800)
		}
	}
})
=======
      // Requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -30.285126, lng: 97.731556,15},
          zoom: 8
        });
        infoWindow = new google.maps.InfoWindow;

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

>>>>>>> 8a27415f92b96bd42745fdfcfeedc42291ff806d
