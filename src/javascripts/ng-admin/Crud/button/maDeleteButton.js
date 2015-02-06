/*global define*/

define(function () {
    'use strict';

    function maDeleteButtonDirective($location) {
        return {
            restrict: 'E',
            scope: {
                'entity': '&',
                'entry': '&',
                'size': '@'
            },
            link: function ($scope) {
                $scope.gotoDelete = function () {
                    var entity = $scope.entity();
                    $location.path('/delete/' + entity.name() + '/' + $scope.entry().identifierValue);
                };
            },
            template:
'<a class="md-raised md-button md-default-theme" ng-click="gotoDelete()">' +
    '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>{{"Delete" | trans}}' +
'</a>'

        };
    }

    maDeleteButtonDirective.$inject = ['$location'];

    return maDeleteButtonDirective;
});
