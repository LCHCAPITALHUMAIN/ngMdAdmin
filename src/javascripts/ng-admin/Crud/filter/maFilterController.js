/*global define*/

define(function () {
    'use strict';

    /**
     *
     * @param {$scope}        $scope
     * @param {$state}        $state
     * @param {$stateParams}  $stateParams
     * @param {$filter}       $filter
     * @param {Configuration} Configuration
     *
     * @constructor
     */
    function maFilterViewController($scope, $state, $stateParams, $filter, $timeout) {
        this.$scope = $scope;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.$filter = $filter;
        this.values = this.$stateParams.search || {};
        this.$scope.filters = this.$scope.filters();
        this.$timeout = $timeout;
        this.isFilterEmpty = isEmpty(this.values);
    }

    function isEmpty(values) {
        for (i in values) {
            if (values[i] != '') return false;
        }
        return true;
    }

    maFilterViewController.prototype.filter = function () {
        var values = {},
            filters = this.$scope.filters,
            fieldName,
            field,
            i,
            obj = this;
        
        this.$timeout(function() {
            
            for (i in filters) {
                field = filters[i];
                fieldName = field.name();

                if (obj.values[fieldName]) {
                    values[fieldName] = obj.values[fieldName];

                    if (field.type() === 'date') {
                        values[fieldName] = obj.$filter('date')(values[fieldName], field.format());
                    }
                }
            }

            obj.$stateParams.search = values;
            obj.$state.go(obj.$state.current, obj.$stateParams, { reload: true, inherit: false, notify: true });
        },2000);
    };

    maFilterViewController.prototype.shouldFilter = function () {
        return Object.keys(this.$scope.filters).length;
    };

    maFilterViewController.prototype.clearFilters = function () {
        var i;

        for (i in this.values) {
            this.values[i] = null;
        }

        this.filter();
    };

    maFilterViewController.$inject = ['$scope', '$state', '$stateParams', '$filter', '$timeout'];

    return maFilterViewController;
});
