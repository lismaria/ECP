var obj= angular.module('mod2',[]);

obj.controller("ctrl2",function($scope)
{
    $scope.theme=true
    $scope.toggletheme=function()
    {
        $scope.theme = $scope.theme == false ? true: false;
    }
    
    $scope.navicon=true
    $scope.togglenavicon=function()
    {
        $scope.navicon = $scope.navicon == false ? true: false;
    }

    $scope.popupcard=false
    $scope.popup=function()
    {
        $scope.popupcard = $scope.popupcard == false ? true: false;
    }

    $scope.createModal=false
    $scope.createGrp=function()
    {
        $scope.createModal = $scope.createModal == false ? true: false;
    }

    $scope.joinModal=false
    $scope.joinGrp=function()
    {
        $scope.joinModal = $scope.joinModal == false ? true: false;
    }
});
