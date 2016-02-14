// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

angular.module('starter')

.controller('MessagesController', function($scope, $http){
  var person = prompt("Please enter your username", "");
  getMessages();
  var objDiv = document.getElementById("message-list");
  $scope.sendMessage = sendMessage;

  function getMessages() {
    $http.get("https://polar-caverns-57560.herokuapp.com/messages").then(function(response){
      $scope.messages = response.data;
      objDiv.scrollTop = objDiv.scrollHeight;
    });
    setTimeout(getMessages, 30000);
  }

  function sendMessage() {
    var message = {
      timestamp: new Date(),
      message: $scope.messageToSend,
      username: person
    };

    navigator.geolocation.getCurrentPosition(function(position){
      message.lat=position.coords.latitude;
      message.lon=position.coords.longitude;
      $http.post("https://polar-caverns-57560.herokuapp.com/messages", message).then(function(response) {
        $scope.messages = response.data;
        objDiv.scrollTop = objDiv.scrollHeight;
    });
    });

    
    document.getElementById("messageToSend").value = "";
  }
});
