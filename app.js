(function (){
        var app = angular.module('myApp', ['ngMap']);

    app.controller('myCtrl', ctrl);

    function ctrl($scope,$http){
        $scope.showData = function() {

            $scope.map.showInfoWindow('pop');
        };

        $scope.center = {lat: 38.722, lng: -9.139};
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        $http.get('data.json').then(function(response){
            $scope.markers = response.data.map(function (item) {
                item.capitalPosition = [item.capitalPosition.lat, item.capitalPosition.lng]
                return item;
            });


        })

    }

})();