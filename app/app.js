(function () {
    'use strict';
    agGrid.initialiseAgGridWithAngular1(angular);
    angular.module('App.Controllers', []);
    angular.module('realfoodApp', [
        'appverse.notifications',
        'appverse.rest',
        'appverse.performance',
        'appverse.logging',
        'appverse.cache',
        'App.home',
        'ngAnimate',
        'ui.bootstrap',
        'angularRipple',
        'ui.select',
        'ngSanitize',
        'rzModule',
        'rt.resize',
        'chart.js',
        'xeditable',
        'agGrid',
        'appverse.router',
        'App.Controllers',
        'appverse',
        'ngMdIcons',
        'angular-loading-bar'
    ]).run(function ($log, editableOptions) {
        $log.debug('testAlphaApp run');
        editableOptions.theme = 'bs3';
        $('#menu-toggle').click(function (e) {
            e.preventDefault();
            $('#wrapper').toggleClass('toggled');
        });
    }).config([
        'cfpLoadingBarProvider',
        function (cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = false;
        }
    ]);
    AppInit.setConfig({
        environment: {
            'REST_CONFIG': {
                'BaseUrl': '/api',
                'RequestSuffix': ''
            }
        },
        appverseMobile: {},
        mobileBrowser: {}
    });
    angular.module('realfoodApp').animation('.fade-in', function () {
        return {
            enter: function (element, done) {
                element.css({ opacity: 0 }).animate({ opacity: 1 }, 1000, done);
            },
            leave: function (element, done) {
                element.css({ opacity: 0 });
                done();
            }
        };
    });
}());