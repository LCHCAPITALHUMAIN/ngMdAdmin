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
'<md-button class="md-fab" ng-click="back()">' +
    '{{"Back" | trans}}' + 
'</md-button>'
        };
    }

    maBackButtonDirective.$inject = ['$window'];

    return maBackButtonDirective;
});
