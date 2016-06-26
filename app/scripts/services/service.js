'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.services:Service
 * @description
 * # Service
 * Service of the angularAppApp
 */

angular.module('angularAppApp.services', ['ngResource'])

.factory("Service", ['$http', '$q', 'constants', function($http, $q, constants)
{
	return {
		/**
		 * [getPosts]
		 * @return {object}
		 */
		getPosts : function() {
			var deferred = $q.defer();

			$http({
				url		: constants.urlPosts,
			    method	: "GET",
			})
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(response){
				deferred.reject(response);
			});
			return deferred.promise;
		},
		/**
		 * [getUsuario]
		 * @return {object}
		 */
		getUsuario : function(){
			var usuario = {
				name: 'Mauricio',
				email: 'carmonaesc@gmail.com'
			}
			return usuario;
		},
	};
}])


.factory("Resources", ['$resource', 'constants', function($resource, constants)
{
    return $resource(constants.urlPosts+"/:id", {id: "@id"});
}]);