angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats,myChats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.mychats = myChats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);

  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('GoalDetailCtrl', function($scope, $stateParams) {
   $scope.expense = { 'amount' : '2000' };
   $scope.time = { 'time' : '30' };
  // $scope.chat = Chats.get($stateParams.chatId);
})

.controller('GoalPriorityCtrl', function($scope, $stateParams) {
   $scope.items = [1, 2, 3, 4];
   $scope.moveItem = function(item, fromIndex, toIndex) {
    //Move the item in the array
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
})

.controller('ExpenseDetailCtrl', function($scope, $stateParams) {
   $scope.expense = { 'amount' : '2000' };
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})

.controller('GoalCtrl', function($scope) {

});



