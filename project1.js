var app = angular.module('app', ['ngAnimate'])

app.controller('mainCtrl', function($scope) {
	$scope.boxes = [{
		name: 'Ocho',
		image: 'https://image.ibb.co/gPKyhx/ocho.jpg'

	},{
		name: 'Patron',
		image: 'https://image.ibb.co/cGmThx/Patron.jpg'
	},{
		name: 'Agave',
		image: 'https://image.ibb.co/hk4s9c/Herradura.jpg'
	}, {
		name: 'Dulce Vida',
		image: 'https://image.ibb.co/njfX9c/Dulce_Vida.jpg'
	}, {
		name: 'DonJulio',
		image: 'https://image.ibb.co/gKqohx/DonJulio.jpg'
	}, {
		name: 'Casa Amigos',
		image: 'https://image.ibb.co/iUEs9c/Casa_Amigos.jpg'
	}, {
		name: 'Avion',
		image: 'https://image.ibb.co/np5caH/Avion.jpg'
	}, {
		name: '512',
		image: 'https://image.ibb.co/m20X9c/512.jpg'
	}, {
		name: 'Altos',
		image: 'https://image.ibb.co/frnOFH/Altos.jpg'
	}, ]

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