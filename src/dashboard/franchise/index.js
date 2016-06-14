'use strict';

import angular from 'angular';
import FranchiseCtrl from './controller.js';
import FranchiseService from './service.js';


export default angular.module('dashboard.franchise', [])
    .service('franchiseService', FranchiseService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.franchise', {
                template: require('./template.html'),
                url: '/franchise',
                controller: FranchiseCtrl,
                controllerAs: 'ctrl',
                // resolve: {
                //     token: ($stateParams) => {
                //         return $stateParams.reset_password_token;
                //     }
                // }
            });
    });
