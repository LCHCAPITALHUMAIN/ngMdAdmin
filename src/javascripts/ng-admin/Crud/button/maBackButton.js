/*global define*/

define(function () {
    'use strict';

    function maBackButtonDirective($window) {
        return {
            restrict: 'E',
            scope: {
                'size': '@'
            },
            link: function ($scope) {
                $scope.back = function () {
                    $window.history.back();
                };
            },
            template:
'<md-button class="md-raised md-button md-default-theme" ng-click="back()">' +
    '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>{{"Back" | trans}}' + 
'</md-button>'
        };
    }

    maBackButtonDirective.$inject = ['$window'];

    return maBackButtonDirective;
});
