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
'<a class="md-raised md-button md-default-theme" ng-click="gotoCreate()">' +
    '{{"Create" | trans}}' +
'</a>'
        };
    }

    maCreateButtonDirective.$inject = ['$location'];

    return maCreateButtonDirective;
});
