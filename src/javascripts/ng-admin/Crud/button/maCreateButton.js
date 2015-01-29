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
'<a class="btn btn-default" ng-class="size ? \'btn-\' + size : \'\'" ng-click="gotoCreate()">' +
    '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>{{"Create" | trans}}' +
'</a>'
        };
    }

    maCreateButtonDirective.$inject = ['$location'];

    return maCreateButtonDirective;
});
