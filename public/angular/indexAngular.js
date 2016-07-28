angular.module('indexTransitions', []).controller('indexTransitionsController', function ($scope) {
    $scope.login = false;
    $scope.signUp = false;

    $scope.loginClick = function () {
        $scope.login = !$scope.login;
    }

    $scope.signUpClick = function () {
        $scope.signUp = !$scope.signUp;
    }
});
