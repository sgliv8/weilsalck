angular.module('weilaSlackApp')
	.factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl){
		//Added a reference to the users node

		var usersRef = new Firebase(FirebaseUrl+ 'users');
		var users = $firebaseArray(usersRef);

		var Users = {
			getProfile: function(uid) {
				return $firebaseObject(usersRef.child(uid));
			},
			getDisplayName: function(uid){
				return users.$getRecord(uid).displayName;
			},
			all: users,
			getGravatar: function(uid) {
				return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
			}
		};

		return Users;
	});