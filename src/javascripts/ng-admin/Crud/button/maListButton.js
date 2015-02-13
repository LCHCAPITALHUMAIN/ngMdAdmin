/*global define*/

define(function () {
    'use strict';

    function maListButtonDirective($location) {
        return {
            restrict: 'E',
            scope: {
                'entity': '&',
                'size': '@'
            },
            link: function ($scope) {
                $scope.gotoList = function () {
                    $location.path('/list/' + $scope.entity().name());
                };
            },
            template:
'<md-button class="md-fab" ng-click="gotoList()">' +
    '{{"List" | trans}}' +
'</md-button>'
        };
    }

    maListButtonDirective.$inject = ['$location'];

    return maListButtonDirective;
});
