/*global require,define,angular*/

define('angular', [], function () {
    'use strict';

    return angular;
});

require.config({
    paths: {
        'angular-resource': 'bower_components/angular-resource/angular-resource',
        'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router',
        'lodash': 'bower_components/lodash/dist/lodash.min',
        'text' : 'bower_components/requirejs-text/text',
        'angular-bootstrap': 'bower_components/angular-bootstrap/ui-bootstrap.min',
        'angular-bootstrap-tpls': 'bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        'restangular': 'bower_components/restangular/dist/restangular',
        'ngInflection': 'bower_components/ngInflection/ngInflection',
        'inflection': 'bower_components/inflection/inflection.min',
        'humane': 'bower_components/humane/humane',
        'nprogress': 'bower_components/nprogress/nprogress',
        'textangular': 'bower_components/textAngular/dist/textAngular.min',
        'angular-ui-codemirror': 'bower_components/angular-ui-codemirror/ui-codemirror.min',
        'angular-animate': 'bower_components/angular-animate/angular-animate.min',
        'angular-aria': 'bower_components/angular-aria/angular-aria.min',
        'angular-material': 'bower_components/angular-material/angular-material.min',
        'MainModule': 'ng-admin/Main/MainModule',
        'CrudModule': 'ng-admin/Crud/CrudModule'
    },
    shim: {
        'restangular': {
            deps: ['angular', 'lodash']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-bootstrap': {
            deps: ['angular']
        },
        'angular-bootstrap-tpls': {
            deps: ['angular', 'angular-bootstrap']
        },
        'angular-material': {
            deps:['angular', 'angular-animate', 'angular-aria']
        }
    }
});

define(function (require) {
    'use strict';

    var angular = require('angular');
    require('MainModule');
    require('CrudModule');

    angular.module('ng-admin', ['main', 'crud']);
});
