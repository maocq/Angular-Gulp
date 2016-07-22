'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', ['$scope', 'Service', 'Resources', function ($scope, Service, Resources) {

    angular.element(document).ready(function () {
        $(".dropdown-button").dropdown();
    });

    this.appName = "Hello =)";
  	$scope.app = 'Hello word';
    $scope.message = 'Lorem ipsum dolor sit amet.';

    console.log(Service.getUsuario());


      // $http.get(baseUrl +'shops/'+shopId+'/delete')
      //     .success(function (data) {
      //         $window.location.reload();
      //     })
      //     .error(function (err, status) {
      //         console.log("error");
      //     });

    // Resources.query().$promise.then(
    //   function(res){
    //       console.log("Recursos");
    //       console.log(res);
    //   },
    //   function(error){
    //       console.log(error);
    //   }
    // );

    $scope.preload = true;
    Service.getPosts()
    .then(function(data){
        $scope.posts = data;
        $scope.preload = false;
    }, function(error){
        console.log("Error: " + error);
        $scope.preload = false;
    });


    $scope.submit = function() {
      var toast = $scope.message;
      Materialize.toast(toast, 4000)
    }
  }]);
