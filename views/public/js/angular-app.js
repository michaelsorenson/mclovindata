// Angular App
var mclovindata = angular.module( 'mclovindata', [ "ngMessages" ] );

mclovindata.controller('mclovindataController', function( $scope, $http, $timeout ) {

    $scope.downloadPDF = function() {
        return $http.get( '/download/' );
    }
});