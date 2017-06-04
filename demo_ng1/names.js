var NameCtrl = function($timeout, $scope) {
  $scope.results = [];
  $scope.loading = '';
  $scope.nick = 'CoolNick';
  $scope.age = '30';
  
  $scope.doAdd = function() {
    $scope.loading = 'Loading...';
    var name = $scope.nick;
    var age = parseInt($scope.age);

    $timeout(function tickslowly() {
        $scope.results.unshift({
          timestamp: new Date(),
          nick: name,
          age: age,
          result: name + (2017 - age)
        });
        $scope.loading = '';
    }, 3000)
  };
};

var names = angular.module('names', []).
    controller('NameCtrl', NameCtrl);
