'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('ContactCtrl', ['$scope', function ($scope) {

      $scope.seguro = {
        nombre:"",
        edad:undefined,
        casado:false,
      }
  }]);
