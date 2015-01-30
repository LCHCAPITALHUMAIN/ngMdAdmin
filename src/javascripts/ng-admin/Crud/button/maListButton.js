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
'<a class="btn btn-default" ng-class="size ? \'btn-\' + size : \'\'" ng-click="gotoList()">' +
    '<span class="glyphicon glyphicon-list" aria-hidden="true"></span>{{"List" | trans}}' +
'</a>'
        };
    }

    maListButtonDirective.$inject = ['$location'];

    return maListButtonDirective;
});
