/*global define*/

define(function () {
    'use strict';

    function maCreateButtonDirective($location) {
        return {
            restrict: 'E',
            scope: {
                'entity': '&',
                'size': '@'
            },
            link: function ($scope) {
                $scope.gotoCreate = function () {
                    $location.path('/create/' + $scope.entity().name());
                };
            },
            template:
'<md-button class="md-fab" ng-click="gotoCreate()">' +
    '+' +
'</md-button>'
        };
    }

    maCreateButtonDirective.$inject = ['$location'];

    return maCreateButtonDirective;
});
