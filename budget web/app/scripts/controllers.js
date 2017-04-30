angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  // $scope.mychats = myChats.all();
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

.controller('SavingsCtrl', function($scope, $stateParams) {
 $scope.numberPickerObject = {
    inputValue: 200, //Optional
    minValue: -0,
    maxValue: 1000,
    decimalStep: 5000,
    format: "WHOLE",  //Optional - "WHOLE" or "DECIMAL"
    titleLabel: 'How much did you save',  //Optional
    setLabel: 'OK!',  //Optional
    closeLabel: 'Close',  //Optional
    setButtonType: 'button-positive',  //Optional
    closeButtonType: 'button-stable',  //Optional
    callback: function (val) {    //Mandatory
     //timePickerCallback(val);
  }}
  // $scope.chat = Chats.get($stateParams.chatId);
})



.controller('GoalPriorityCtrl', function($scope, $stateParams) {
   $scope.items = [
     {
    id: 1,
    name: 'Stationary',
    icon: 'ion-edit',
    note:'12 days'
    
  }, 
  {
    id: 2,
    name: 'Uniform',
    icon: 'ion-tshirt',
    note:'24 days'
    
  }, 
  {
    id: 3,
    name: 'School Fees',
    icon: 'ion-cash',
    note:'46 days'
    
  }, 
  
  {
      id: 4,
      name: 'Transport',
      icon: 'ion-android-bus',
      note:'8 days'
      
    }    ];



    $scope.moveItem = function(item, fromIndex, toIndex) {
    //Move the item in the array
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
})

.controller('ExpenseDetailCtrl', function($scope, $stateParams) {
   $scope.expense = { 'amount' : '2000' };
})


.controller('AccountCtrl', function($scope, $ionicScrollDelegate) {
  $scope.disableVerticalScrolling = function() {
    var scrollPos = $ionicScrollDelegate.getScrollPosition().top;
    $ionicScrollDelegate.scrollTo(0, scrollPos, false);
}


  $scope.settings = {
    enableFriends: true
  }
})

.controller('GoalCtrl', function($scope) {

});



