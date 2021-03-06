angular.module('app')
    .controller('MainController', function($scope, webcamService) {

        /*Initialisation*/
        $scope.beach = "";
        $scope.mountain = "";
        $scope.island = "";
        $scope.meteo = "";
        $scope.golf = "";
        $scope.lake = "";

        /*beach categorie*/
        $scope.runBeach = function() {
            webcamService.getBeach().then(function(res) {
                var i = 0;
                i = (Math.ceil(Math.random() * 20));
                $scope.beach = (res.data.result.webcams[i].image.daylight.preview);
                $scope.title1 = (res.data.result.webcams[i].location.city);
                $scope.country1 = (res.data.result.webcams[i].location.country);
                $scope.latitude1 = (res.data.result.webcams[i].location.latitude);
                $scope.longitude1 = (res.data.result.webcams[i].location.longitude);

                console.log(res.data.result.webcams[i]);
            });
        };
        $scope.runBeach();

        /*mountain categorie*/
        $scope.runMountain = function() {
            webcamService.getMountain().then(function(res) {
                var i = 0;
                i = (Math.ceil(Math.random() * 20));
                $scope.mountain = (res.data.result.webcams[i].image.daylight.preview);
                $scope.title2 = (res.data.result.webcams[i].location.city);
                $scope.country2 = (res.data.result.webcams[i].location.country);
            });
        };
        $scope.runMountain();

        /*island categorie*/
        $scope.runIsland = function() {
            webcamService.getIsland().then(function(res) {
                var i = 0;
                i = (Math.ceil(Math.random() * 20));
                $scope.island = (res.data.result.webcams[i].image.daylight.preview);
                $scope.title3 = (res.data.result.webcams[i].location.city);
                $scope.country3 = (res.data.result.webcams[i].location.country);
            });
        };
        $scope.runIsland();


        $scope.runMeteo = function() {
            webcamService.getMeteo().then(function(res) {
                var i = 0;
                i = (Math.ceil(Math.random() * 20));
                $scope.meteo = (res.data.result.webcams[i].image.daylight.preview);
                $scope.title4 = (res.data.result.webcams[i].location.city);
                $scope.country4 = (res.data.result.webcams[i].location.country);
            });
        };
        $scope.runMeteo();

        /*golf categorie*/
        $scope.runGolf = function() {
            webcamService.getGolf().then(function(res) {
                var i = 0;
                i = (Math.ceil(Math.random() * 20));
                $scope.golf = (res.data.result.webcams[i].image.daylight.preview);
                $scope.title5 = (res.data.result.webcams[i].location.city);
                $scope.country5 = (res.data.result.webcams[i].location.country);
            });
        };
        $scope.runGolf();

        /*lake categorie*/
        $scope.runLake = function() {
            webcamService.getLake().then(function(res) {
                var i = 0;
                i = (Math.ceil(Math.random() * 20));
                $scope.lake = (res.data.result.webcams[i].image.daylight.preview);
                $scope.title6 = (res.data.result.webcams[i].location.city);
                $scope.country6 = (res.data.result.webcams[i].location.country);
            });
        };
        $scope.runLake();

    });
