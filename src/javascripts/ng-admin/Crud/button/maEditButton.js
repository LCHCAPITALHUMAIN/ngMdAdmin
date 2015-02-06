/*global define*/

define(function () {
    'use strict';

    function maEditButtonDirective($location) {
        return {
            restrict: 'E',
            scope: {
                'entity': '&',
                'entry': '&',
                'size': '@'
            },
            link: function ($scope) {
                $scope.gotoEdit = function () {
                    var entity = $scope.entity();
                    $location.path('/edit/' + entity.name() + '/' + $scope.entry().identifierValue);
                };
            },
            template:
'<md-button class="md-raised md-button md-default-theme" ng-click="gotoEdit()">' +
    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>{{"Edit" | trans}}' +
'</md-button>'
        };
    }

    maEditButtonDirective.$inject = ['$location'];

    return maEditButtonDirective;
});
