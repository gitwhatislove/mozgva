'use strict';

import angular from 'angular';
import CalendarCtrl from './controller.js';
import CalendarService from './service.js';


export default angular.module('dashboard.calendar', [])
    .service('calendarmainService', CalendarService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.calendar', {
                template: require('./template.html'),
                url: '/calendar',
                controller: CalendarCtrl,
                controllerAs: 'ctrl',
                // resolve: {
                //     token: ($stateParams) => {
                //         return $stateParams.reset_password_token;
                //     }
                // }
            });
    });
