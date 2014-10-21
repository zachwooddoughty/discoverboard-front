angular.module('app')

.directive('integer', function() {
	return {
		require: 'ngModel',
		link: function(scope, ele, attr, ctrl) {
			ctrl.$parsers.unshift(function(viewValue) {
				if (viewValue === '' || viewValue === null || typeof viewValue === 'undefined') {
					return null;
				}
				return parseInt(viewValue, 10);
			});
		}
	};
})

.controller('MainCtrl', function($scope) {

	$scope.gridsterOpts = {
		margins: [2, 2],
		outerMargin: false,
		pushing: true,
		floating: true,
		maxRows: 3,
		draggable: {
			enabled: false
		},
		resizable: {
			enabled: true,
			handles: ['n', 'e', 's', 'w', 'se', 'sw']
		}
	};

	// these map directly to gridsterItem options
	$scope.standardItems = [{
		sizeX: 2,
		sizeY: 1,
		row: 0,
		col: 0
	}];


	$scope.addTile = function(){
		$scope.standardItems.push({
			sizeX: 2,
			sizeY: 1,
			row: 0,
			col: 0
		})
	};

});
