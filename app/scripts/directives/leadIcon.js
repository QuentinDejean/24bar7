'use strict';

angular.module('24bar7App')
    .directive('leadIcon', function () {
        return {
            scope: {
                url: '@',
                icon: '@'
            },
            templateUrl: '/views/templates/leadIcon.html',
            restrict: 'E'
        };
    });