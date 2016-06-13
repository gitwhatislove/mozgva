'use strict';

import angular from 'angular';
import CorparatCtrl from './controller.js';
import CorparatService from './service.js';


export default angular.module('dashboard.corparat', [])
    .service('corparatService', CorparatService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.corparat', {
                template: require('./template.html'),
                url: '/corporate',
                controller: CorparatCtrl,
                controllerAs: 'ctrl',
                // resolve: {
                //     token: ($stateParams) => {
                //         return $stateParams.reset_password_token;
                //     }
                // }
            });
    });
