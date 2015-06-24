angular.module('weilaSlackApp')
	.factory('Auth', function($firebaseAuth, FirebaseUrl){
		var ref = new firebase(FirebaseUrl);
		var auth = $firebaseAuth(ref);

		return auth;
	});