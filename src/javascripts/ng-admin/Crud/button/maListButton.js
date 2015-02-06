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
'<md-button class="md-raised md-button md-default-theme" ng-click="gotoList()">' +
    '<span class="glyphicon glyphicon-list" aria-hidden="true"></span>{{"List" | trans}}' +
'</md-button>'
        };
    }

    maListButtonDirective.$inject = ['$location'];

    return maListButtonDirective;
});
