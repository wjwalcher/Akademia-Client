angular.module('starter')
.factory('UserService', function UserService(){
	var user = {
		username: "",
		lat: "",
		lon: ""
	}
	return{
		user:user
	}
});