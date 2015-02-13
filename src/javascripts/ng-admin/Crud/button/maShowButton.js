/*global define*/

define(function () {
    'use strict';

    function maShowButtonDirective($location) {
        return {
            restrict: 'E',
            scope: {
                'entity': '&',
                'entry': '&',
                'size': '@'
            },
            link: function ($scope) {
                $scope.gotoShow = function () {
                    var entity = $scope.entity();
                    $location.path('/show/' + entity.name() + '/' + $scope.entry().identifierValue);
                };
            },
            template:
'<md-button class="md-fab" ng-click="gotoShow()">' +
    '{{"Show" | trans}}' +
'</md-button>'
        };
    }

    maShowButtonDirective.$inject = ['$location'];

    return maShowButtonDirective;
});
