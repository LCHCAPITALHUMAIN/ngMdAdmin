/*global define*/

define(function () {
    'use strict';

    /**
     *
     * @param {$scope} $scope
     * @param {$location} $location
     * @constructor
     */
    function DatagridController($scope, $location) {
        this.$scope = $scope;
        this.$location = $location;

        var searchParams = this.$location.search();
        this.sortField = 'sortField' in searchParams ? searchParams.sortField : '';
        this.sortDir = 'sortDir' in searchParams ? searchParams.sortDir : '';
        this.$scope.fields = this.$scope.view.getDisplayedFields();
        this.$scope.listActions = this.$scope.view.listActions ? this.$scope.view.listActions() : false; // FIXME the embedded datagrid inside an edition view points to the parent EditView instead of the ListView
        this.$scope.entity = this.$scope.view.getEntity();
    }

    /**
     * Return true if a column is being sorted
     *
     * @param {Field} field
     *
     * @returns {Boolean}
     */
    DatagridController.prototype.isSorting = function (field) {
        return this.sortField === this.getSortName(field);
    };

    /**
     * Return 'even'|'odd' based on the index parameter
     *
     * @param {Number} index
     * @returns {string}
     */
    DatagridController.prototype.itemClass = function (index) {
        return (index % 2 === 0) ? 'even' : 'odd';
    };

    /**
     *
     * @param {Field} field
     */
    DatagridController.prototype.sort = function (field) {
        var dir = 'ASC',
            fieldName = this.getSortName(field);

        if (this.sortField === fieldName) {
            dir = this.sortDir === 'ASC' ? 'DESC' : 'ASC';
        }

        this.$location.search('sortField', fieldName);
        this.$location.search('sortDir', dir);
    };

    /**
     * Return fieldName like (view.fieldName) to sort
     *
     * @param {Field} field
     *
     * @returns {String}
     */
    DatagridController.prototype.getSortName = function (field) {
        return this.$scope.name + '.' + field.name();
    };

    DatagridController.$inject = ['$scope', '$location'];

    return DatagridController;
});
